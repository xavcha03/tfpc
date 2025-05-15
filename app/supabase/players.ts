import { supabase } from './client'

export async function updateScore(playerId: string, delta: number) {
  const { error } = await supabase.rpc('update_player_score', {
    pid: playerId,
    delta,
  })
  return error
}

export async function getPlayersByScore(roomId: string) {
  const { data, error } = await supabase
    .from('players')
    .select('id, nickname, score')
    .eq('room_id', roomId)
    .order('score', { ascending: false })
  return { data, error }
} 