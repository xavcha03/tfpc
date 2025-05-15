import React from 'react'
import { render, screen } from '@testing-library/react-native'
import GameScreen from '../app/screens/GameScreen'

describe('GameScreen', () => {
  it('should display a random job on screen', () => {
    render(<GameScreen />)

    const jobText = screen.getByTestId('job-display')

    expect(jobText).toBeTruthy()
    expect(typeof jobText.props.children).toBe('string')
    expect(jobText.props.children.length).toBeGreaterThan(3)
  })
}) 