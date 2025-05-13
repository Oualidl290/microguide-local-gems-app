
import { Database } from "@/integrations/supabase/types";

// Define a type for the Profile from the database
export type Profile = Database['public']['Tables']['profiles']['Row'];

// Define a type for the user with profile information
export type UserWithProfile = {
  id: string;
  email?: string;
  profile?: Profile;
};

// Define a context type for the auth context
export interface AuthContextType {
  user: UserWithProfile | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<Profile>) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  updateProfile: (profile: Partial<Profile>) => Promise<void>;
}
