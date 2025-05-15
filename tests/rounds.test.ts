import { getRoundDetails } from '../app/supabase/rounds'
import { supabase } from '../app/supabase/client'

jest.mock('../app/supabase/client', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() => ({ data: { job: 'Test', trait1: 'A', trait2: 'B', trait3: 'C' }, error: null }))
        }))
      }))
    }))
  }
}))

describe('getRoundDetails', () => {
  it('returns job and traits', async () => {
    const { data, error } = await getRoundDetails('round1')
    expect(error).toBeNull()
    expect(data).toEqual({ job: 'Test', trait1: 'A', trait2: 'B', trait3: 'C' })
  })
}) 