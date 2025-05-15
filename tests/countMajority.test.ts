import { countMajority } from '../app/supabase/votes'

describe('countMajority', () => {
  it('compte correctement les votes best et worst', () => {
    const votes = [
      { target_id: 'u1', vote_type: 'best' },
      { target_id: 'u1', vote_type: 'worst' },
      { target_id: 'u2', vote_type: 'best' },
      { target_id: 'u1', vote_type: 'best' },
      { target_id: 'u2', vote_type: 'worst' },
    ]
    const result = countMajority(votes)
    expect(result).toEqual({
      u1: { best: 2, worst: 1 },
      u2: { best: 1, worst: 1 },
    })
  })
}) 