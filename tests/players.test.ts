import { updateScore } from '../app/supabase/players'
import { supabase } from '../app/supabase/client'

jest.mock('../app/supabase/client', () => ({
  supabase: {
    rpc: jest.fn(() => ({ error: null })),
  },
}))

describe('updateScore', () => {
  it('updates player score correctly', async () => {
    const error = await updateScore('user1', 3)
    expect(error).toBeNull()
  })
}) 