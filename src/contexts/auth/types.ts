
import { Profile } from '@/types/auth';

export interface UserWithProfile {
  id: string;
  email?: string;
  profile?: Profile;
}

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
