import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MOCK_PLAYERS } from '../data/mockPlayers'
import PlayerCard from '../components/PlayerCard'

export default function VoteScreen() {
  const [votes, setVotes] = useState<Record<string, 'best' | 'worst'>>({})

  const handleVote = (id: string, type: 'best' | 'worst') => {
    setVotes({ ...votes, [id]: type })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qui serait le plus apte ?</Text>
      <FlatList
        data={MOCK_PLAYERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayerCard
            nickname={item.nickname}
            onVoteBest={() => handleVote(item.id, 'best')}
            onVoteWorst={() => handleVote(item.id, 'worst')}
          />
        )}
      />
      <Text style={styles.resultTitle}>Tes votes :</Text>
      {Object.entries(votes).map(([id, type]) => (
        <Text key={id}>{MOCK_PLAYERS.find(p => p.id === id)?.nickname}: {type}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 12 },
  resultTitle: { marginTop: 20, fontWeight: 'bold' },
}) 