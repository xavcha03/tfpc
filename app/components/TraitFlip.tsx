import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'

export default function TraitFlip({ trait }: { trait: string }) {
  const [flip] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(flip, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start()
  }, [])

  const rotateY = flip.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  })

  return (
    <Animated.View style={[styles.card, { transform: [{ rotateY }] }]}> 
      <Text style={styles.text}>{trait}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginVertical: 8,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
}) 