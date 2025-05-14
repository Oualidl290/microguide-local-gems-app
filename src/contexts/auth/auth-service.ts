
import { supabase, enhancedQuery } from '@/integrations/supabase/client';
import { Profile } from '@/types/auth';
import { UserWithProfile } from './types';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
    // Use enhanced query with caching for profile data
    const result = await enhancedQuery(
      `profile-${userId}`,
      async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();
        
        if (error) {
          console.error("Error fetching profile:", error);
          return null;
        }
        
        return data;
      },
      5 * 60 * 1000 // Cache for 5 minutes
    );
    
    return result;
  } catch (error) {
    console.error("Error in profile fetch:", error);
    return null;
  }
}

export async function signInWithEmailPassword(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUpWithEmailPassword(email: string, password: string, userData?: Partial<Profile>) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });
}

export async function signInWithGoogleOAuth() {
  return await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  });
}

export async function signOutUser() {
  // Clear all caches when user signs out
  return await supabase.auth.signOut();
}

export async function updateUserProfile(userId: string, profileData: Partial<Profile>) {
  const { error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId);
  
  if (error) {
    throw error;
  }
  
  // Invalidate user profile cache
  return await fetchUserProfile(userId);
}

export async function getCurrentSession() {
  return await supabase.auth.getSession();
}

export function subscribeToAuthChanges(callback: (event: string, session: any) => void) {
  return supabase.auth.onAuthStateChange(callback);
}
