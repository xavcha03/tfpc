import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

type PlayerCardProps = {
  nickname: string
  onVoteBest: () => void
  onVoteWorst: () => void
}

export default function PlayerCard({ nickname, onVoteBest, onVoteWorst }: PlayerCardProps) {
  return (
    <TouchableOpacity
      onPress={onVoteBest}
      onLongPress={onVoteWorst}
      style={styles.card}
      testID={`card-${nickname}`}
    >
      <Text style={styles.text}>{nickname}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
}) 