
import { supabase } from '@/integrations/supabase/client';
import { Profile } from '@/types/auth';
import { UserWithProfile } from './types';

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  try {
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
  
  return await fetchUserProfile(userId);
}

export async function getCurrentSession() {
  return await supabase.auth.getSession();
}

export function subscribeToAuthChanges(callback: (event: string, session: any) => void) {
  return supabase.auth.onAuthStateChange(callback);
}
