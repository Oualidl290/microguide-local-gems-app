
/// <reference types="vite/client" />

import { AuthContextType } from "./types/auth";

declare global {
  interface Window {
    SUPABASE_URL?: string;
    SUPABASE_KEY?: string;
  }
}
