import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL;
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  NEXT_PUBLIC_SUPABASE_URL || "",
  NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  {
    auth: {
      persistSession: false,
    },
  }
);

// Generated from Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      "fx-rates": {
        Row: {
          base: string | null;
          id: string;
          price: number | null;
          quote: string | null;
          timestamp: string | null;
        };
        Insert: {
          base?: string | null;
          id?: string;
          price?: number | null;
          quote?: string | null;
          timestamp?: string | null;
        };
        Update: {
          base?: string | null;
          id?: string;
          price?: number | null;
          quote?: string | null;
          timestamp?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
