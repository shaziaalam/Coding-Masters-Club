import { createClient, SupabaseClient } from '@supabase/supabase-js';

const CONFIG_STORAGE_KEY = 'coding_club_supabase_config';

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

let supabaseInstance: SupabaseClient | null = null;

const cleanString = (val?: string): string => {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '').trim();
};

const cleanUrl = (val?: string): string => {
  if (!val) return '';
  return val
    .trim()
    .replace(/^["']|["']$/g, '')
    .trim()
    .replace(/\/rest\/v1\/?$/i, '')
    .replace(/\/+$/, '');
};

export const getStoredSupabaseConfig = (): SupabaseConfig | null => {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const url = cleanUrl(parsed.url);
      const anonKey = cleanString(parsed.anonKey);
      if (url && anonKeyValid(anonKey) && !url.includes('your-project')) {
        return { url, anonKey };
      }
    }
  } catch {
    // fallback
  }

  // Check Vite environment variables with direct static access for build-time injection
  const envUrl = cleanUrl(import.meta.env.VITE_SUPABASE_URL);
  const envKey = cleanString(import.meta.env.VITE_SUPABASE_ANON_KEY);
  if (envUrl && anonKeyValid(envKey) && !envUrl.includes('your-project')) {
    return { url: envUrl, anonKey: envKey };
  }

  return null;
};

export const hasBuiltInCloud = (): boolean => {
  const envUrl = cleanUrl(import.meta.env.VITE_SUPABASE_URL);
  const envKey = cleanString(import.meta.env.VITE_SUPABASE_ANON_KEY);
  return !!(envUrl && anonKeyValid(envKey) && !envUrl.includes('your-project'));
};

export const hasCustomOverride = (): boolean => {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!saved) return false;
    const parsed = JSON.parse(saved);
    const url = cleanUrl(parsed.url);
    const anonKey = cleanString(parsed.anonKey);
    return !!(url && anonKeyValid(anonKey) && !url.includes('your-project'));
  } catch {
    return false;
  }
};

const anonKeyValid = (key: string): boolean => {
  return typeof key === 'string' && key.length > 20;
};

export const setStoredSupabaseConfig = (url: string, anonKey: string): void => {
  try {
    const sanitizedUrl = cleanUrl(url);
    const sanitizedKey = cleanString(anonKey);
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify({ url: sanitizedUrl, anonKey: sanitizedKey }));
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
