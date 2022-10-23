import { useContext, useEffect } from 'react'
import differenceInSeconds from 'date-fns/differenceInSeconds'

import { Colon, CountdownContainer } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export default function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number | undefined
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
    totalSeconds,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer | ${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Colon>:</Colon>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
