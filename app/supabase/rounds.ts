import { supabase } from './client'
import { JOBS } from '../data/jobs'
import { TRAITS } from '../data/traits'

export async function getRoundDetails(roundId: string) {
  const { data, error } = await supabase
    .from('rounds')
    .select('job, trait1, trait2, trait3')
    .eq('id', roundId)
    .single()

  return { data, error }
}

export async function createRound(roomId: string) {
  // Sélectionne un métier et 3 traits aléatoires
  const job = JOBS[Math.floor(Math.random() * JOBS.length)]
  const shuffledTraits = TRAITS.sort(() => 0.5 - Math.random())
  const [trait1, trait2, trait3] = shuffledTraits.slice(0, 3)
  const { data, error } = await supabase.from('rounds').insert([
    { room_id: roomId, job, trait1, trait2, trait3 }
  ]).select().single()
  return { data, error }
}

export async function getCurrentRound(roomId: string) {
  const { data, error } = await supabase
    .from('rounds')
    .select('*')
    .eq('room_id', roomId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
  return { data, error }
} 