import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import PlayerCard from '../app/components/PlayerCard'

describe('PlayerCard', () => {
  it('triggers onVoteBest on tap', () => {
    const mockBest = jest.fn()
    const mockWorst = jest.fn()

    const { getByTestId } = render(
      <PlayerCard nickname="Test" onVoteBest={mockBest} onVoteWorst={mockWorst} />
    )

    fireEvent.press(getByTestId('card-Test'))
    expect(mockBest).toHaveBeenCalled()
    expect(mockWorst).not.toHaveBeenCalled()
  })

  it('triggers onVoteWorst on long press', () => {
    const mockBest = jest.fn()
    const mockWorst = jest.fn()

    const { getByTestId } = render(
      <PlayerCard nickname="Test" onVoteBest={mockBest} onVoteWorst={mockWorst} />
    )

    fireEvent(getByTestId('card-Test'), 'onLongPress')
    expect(mockWorst).toHaveBeenCalled()
    expect(mockBest).not.toHaveBeenCalled()
  })
}) 