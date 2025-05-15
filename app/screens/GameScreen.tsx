import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { JOBS } from '../data/jobs'

const GameScreen = () => {
  const [job, setJob] = useState<string | null>(null)

  useEffect(() => {
    const randomJob = JOBS[Math.floor(Math.random() * JOBS.length)]
    setJob(randomJob)
  }, [])

  return (
    <View style={styles.container}>
      <Text testID="job-display" style={styles.jobText}>
        {job || 'Chargement…'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  jobText: {
    fontSize: 24,
    textAlign: 'center',
  },
})

export default GameScreen 