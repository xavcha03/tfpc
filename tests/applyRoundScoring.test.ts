import { applyRoundScoring } from '../app/supabase/scoring'

describe('applyRoundScoring', () => {
  it('calcule correctement les deltas de score', () => {
    const votes = [
      { voter_id: 'u1', target_id: 'u2', vote_type: 'best' as const },
      { voter_id: 'u2', target_id: 'u2', vote_type: 'best' as const },
      { voter_id: 'u3', target_id: 'u1', vote_type: 'worst' as const },
      { voter_id: 'u4', target_id: 'u2', vote_type: 'best' as const },
      { voter_id: 'u1', target_id: 'u3', vote_type: 'worst' as const },
    ]
    const players = [
      { id: 'u1', nickname: 'Sophie' },
      { id: 'u2', nickname: 'Ludo' },
      { id: 'u3', nickname: 'Alex' },
      { id: 'u4', nickname: 'Momo' },
    ]
    const result = applyRoundScoring(votes, players)
    expect(result).toEqual({
      u1: 1,
      u2: 3,
      u3: 0,
      u4: 1,
    })
  })
}) 