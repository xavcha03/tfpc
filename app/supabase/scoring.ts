type Vote = { voter_id: string; target_id: string; vote_type: 'best' | 'worst' }
type Player = { id: string; nickname: string }

export function applyRoundScoring(votes: Vote[], players: Player[]): Record<string, number> {
  // 1. Calcul de la majorité
  const counts: Record<string, { best: number; worst: number }> = {}
  for (const v of votes) {
    if (!counts[v.target_id]) counts[v.target_id] = { best: 0, worst: 0 }
    counts[v.target_id][v.vote_type] += 1
  }
  // Trouver la majorité best et worst
  let maxBest = 0, maxWorst = 0
  for (const id in counts) {
    if (counts[id].best > maxBest) maxBest = counts[id].best
    if (counts[id].worst > maxWorst) maxWorst = counts[id].worst
  }
  const bestWinners = Object.keys(counts).filter(id => counts[id].best === maxBest && maxBest > 0)
  const worstWinners = Object.keys(counts).filter(id => counts[id].worst === maxWorst && maxWorst > 0)

  // 2. Attribution des points
  const deltas: Record<string, number> = {}
  for (const p of players) deltas[p.id] = 0
  // Être élu Best par la majorité : +2
  for (const id of bestWinners) deltas[id] += 2
  // Être élu Worst : -1
  for (const id of worstWinners) deltas[id] -= 1
  // Avoir bien voté Best/Worst (vote = majorité) : +1
  for (const v of votes) {
    if (v.vote_type === 'best' && bestWinners.includes(v.target_id)) deltas[v.voter_id] += 1
    if (v.vote_type === 'worst' && worstWinners.includes(v.target_id)) deltas[v.voter_id] += 1
  }
  return deltas
} 