import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

const supabaseUrl = Constants.manifest?.extra?.SUPABASE_URL
const supabaseAnonKey = Constants.manifest?.extra?.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
