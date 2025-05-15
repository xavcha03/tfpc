import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TraitFlip from '../components/TraitFlip'
import { getVotesForRound, countMajority } from '../supabase/votes'

// À adapter selon ta logique réelle
const MOCK_JOB = 'Astronaute stagiaire'
const MOCK_TRAITS = ['Curieux(se)', 'Rigoureux(se)', 'Aventureux(se)']
const MOCK_ROUND_ID = 'round123'
const MOCK_PLAYERS = [
  { id: 'u1', nickname: 'Sophie' },
  { id: 'u2', nickname: 'Ludo' },
  { id: 'u3', nickname: 'Alex' },
  { id: 'u4', nickname: 'Momo' },
]

export default function RoundResultScreen() {
  const [shownTraits, setShownTraits] = useState<string[]>([])
  const [votes, setVotes] = useState<any[]>([])
  const [majority, setMajority] = useState<any>({})

  useEffect(() => {
    // Affichage progressif des traits
    setShownTraits([])
    MOCK_TRAITS.forEach((trait, i) => {
      setTimeout(() => {
        setShownTraits((prev) => [...prev, trait])
      }, i * 5000)
    })
    // Récup votes
    getVotesForRound(MOCK_ROUND_ID).then(({ data }) => {
      setVotes(data || [])
      setMajority(countMajority(data || []))
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.job}>{MOCK_JOB}</Text>
      {shownTraits.map((trait, i) => (
        <TraitFlip key={i} trait={trait} />
      ))}
      <Text style={styles.title}>Résultats du vote :</Text>
      {MOCK_PLAYERS.map((p) => (
        <Text key={p.id}>
          {p.nickname} :
          Best = {majority[p.id]?.best || 0} / Worst = {majority[p.id]?.worst || 0}
        </Text>
      ))}
      <Text style={styles.title}>Score temporaire (à calculer)</Text>
      <Button title="Manche suivante" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  job: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  title: { fontSize: 20, marginTop: 24, marginBottom: 8 },
}) 