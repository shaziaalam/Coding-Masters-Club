import { createClient, SupabaseClient } from '@supabase/supabase-js';

const CONFIG_STORAGE_KEY = 'coding_club_supabase_config';

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

let supabaseInstance: SupabaseClient | null = null;

export const getStoredSupabaseConfig = (): SupabaseConfig | null => {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.url && parsed.anonKey) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }

  // Check Vite environment variables safely
  const metaEnv = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env;
  const envUrl = metaEnv?.VITE_SUPABASE_URL;
  const envKey = metaEnv?.VITE_SUPABASE_ANON_KEY;
  if (envUrl && envKey) {
    return { url: envUrl, anonKey: envKey };
  }

  return null;
};

export const setStoredSupabaseConfig = (url: string, anonKey: string): void => {
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify({ url: url.trim(), anonKey: anonKey.trim() }));
    supabaseInstance = null; // Reset to force re-init
  } catch {
    // storage error
  }
};

export const clearStoredSupabaseConfig = (): void => {
  try {
    localStorage.removeItem(CONFIG_STORAGE_KEY);
    supabaseInstance = null;
  } catch {
    // storage error
  }
};

export const getSupabase = (): SupabaseClient | null => {
  if (supabaseInstance) return supabaseInstance;

  const config = getStoredSupabaseConfig();
  if (config && config.url && config.anonKey) {
    try {
      supabaseInstance = createClient(config.url, config.anonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      });
      return supabaseInstance;
    } catch {
      return null;
    }
  }

  return null;
};

export const isCloudConfigured = (): boolean => {
  return getStoredSupabaseConfig() !== null;
};
