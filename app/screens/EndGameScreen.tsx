import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getPlayersByScore } from '../supabase/players'

export default function EndGameScreen({ route }) {
  const { roomId } = route.params
  const [players, setPlayers] = useState([])

  useEffect(() => {
    getPlayersByScore(roomId).then(({ data }) => {
      if (data) setPlayers(data)
    })
  }, [roomId])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Fin de partie !</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>
              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}ᵉ`}
            </Text>
            <Text style={styles.name}>{item.nickname}</Text>
            <Text style={styles.score}>{item.score} pts</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  rank: { fontSize: 22 },
  name: { fontSize: 18 },
  score: { fontSize: 18 },
}) 