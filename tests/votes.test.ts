import { castVote } from '../app/supabase/votes'
import { supabase } from '../app/supabase/client'

jest.mock('../app/supabase/client', () => ({
  supabase: {
    from: jest.fn(() => ({
      insert: jest.fn(() => ({ error: null })),
    })),
  },
}))

describe('castVote', () => {
  it('inserts a vote without error', async () => {
    const err = await castVote('round123', 'user1', 'user2', 'best')
    expect(err).toBeNull()
  })
}) 