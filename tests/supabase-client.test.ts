import { supabase } from '../app/supabase/client'

describe('Supabase client', () => {
  it('should be initialized with a valid URL and key', () => {
    expect(supabase).toBeDefined()
    expect(typeof supabase).toBe('object')
    expect(supabase.auth).toBeDefined()
  })
}) 