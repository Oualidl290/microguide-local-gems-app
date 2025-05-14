
import { createContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Profile } from '@/types/auth';
import { AuthContextType, UserWithProfile } from './types';
import {
  fetchUserProfile,
  signInWithEmailPassword,
  signUpWithEmailPassword,
  signInWithGoogleOAuth,
  signOutUser,
  updateUserProfile,
  getCurrentSession,
  subscribeToAuthChanges
} from './auth-service';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Enhanced Auth State Management
  useEffect(() => {
    console.log("Setting up auth listeners...");
    
    // First, set up the auth state change listener
    const { data: { subscription } } = subscribeToAuthChanges(
      async (event, session) => {
        console.log("Auth state changed:", event);
        
        if (session?.user) {
          console.log("User authenticated:", session.user.id);
          setUser({
            id: session.user.id,
            email: session.user.email
          });
          
          // Fetch the user profile
          const profileData = await fetchUserProfile(session.user.id);
          
          if (profileData) {
            console.log("Profile loaded:", profileData);
            setProfile(profileData);
            setUser(prev => ({
              ...prev!,
              profile: profileData,
            }));
          }
        } else {
          console.log("No active user session");
          setUser(null);
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    // Then check for existing session
    const checkSession = async () => {
      try {
        setLoading(true);
        const { data: { session } } = await getCurrentSession();
        
        if (session?.user) {
          console.log("Existing session found:", session.user.id);
          setUser({
            id: session.user.id,
            email: session.user.email
          });
          
          // Fetch the user profile
          const profileData = await fetchUserProfile(session.user.id);
          
          if (profileData) {
            console.log("Profile loaded from existing session:", profileData);
            setProfile(profileData);
            setUser(prev => ({
              ...prev!,
              profile: profileData,
            }));
          }
        } else {
          console.log("No existing session found");
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    return () => {
      console.log("Cleaning up auth listeners");
      subscription?.unsubscribe();
    };
  }, []);

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await signInWithEmailPassword(email, password);

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "You have successfully signed in!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign in",
        variant: "destructive",
      });
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sign up with email and password
  const signUp = async (email: string, password: string, userData?: Partial<Profile>) => {
    try {
      setLoading(true);
      const { error } = await signUpWithEmailPassword(email, password, userData);

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "Account created! Please verify your email.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign up",
        variant: "destructive",
      });
      console.error('Error signing up:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await signInWithGoogleOAuth();

      if (error) {
        throw error;
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during Google sign in",
        variant: "destructive",
      });
      console.error('Error signing in with Google:', error);
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await signOutUser();

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "You have successfully signed out!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign out",
        variant: "destructive",
      });
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (profileData: Partial<Profile>) => {
    try {
      setLoading(true);
      
      if (!user) throw new Error("No user logged in");
      
      const updatedProfile = await updateUserProfile(user.id, profileData);
      
      if (updatedProfile) {
        setProfile(updatedProfile);
        setUser(prev => ({
          ...prev!,
          profile: updatedProfile,
        }));
      }

      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while updating profile",
        variant: "destructive",
      });
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
