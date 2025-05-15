import { supabase } from './client'

export async function castVote(roundId: string, voterId: string, targetId: string, voteType: 'best' | 'worst') {
  const { error } = await supabase.from('votes').insert([
    { round_id: roundId, voter_id: voterId, target_id: targetId, vote_type: voteType },
  ])
  return error
}

export async function getVotesForRound(roundId: string) {
  const { data, error } = await supabase
    .from('votes')
    .select('voter_id, target_id, vote_type')
    .eq('round_id', roundId)
  return { data, error }
}

export function countMajority(votes: { target_id: string; vote_type: string }[]) {
  const counts: Record<string, { best: number; worst: number }> = {}

  for (const v of votes) {
    if (!counts[v.target_id]) counts[v.target_id] = { best: 0, worst: 0 }
    counts[v.target_id][v.vote_type as 'best' | 'worst'] += 1
  }

  return counts
} 