import { PositionsService } from '../services/positionsService'
import { Dimensials, WordAdjusted, WordPositioned } from '../types'

export function positionWords(
  words: Array<WordAdjusted>,
  dimensials: Dimensials,
): Array<WordPositioned> {
  const positionService = new PositionsService(dimensials)
  positionService.flush()
  try {
    words.forEach(({ word, delay }) =>
      positionService.generate({ word, delay }),
    )
  } catch (e) {
    const error = e as Error
    console.warn(error.message)
  }

  const positions = positionService.getPoints()

  const extendedWords: Partial<Array<WordPositioned>> = positions.map(
    ([{ x, y }, { delay, word }]) => {
      return { delay, word, x: x.from, y: y.from }
    },
  )

  const filteredExtendedWords = extendedWords.filter(Boolean) as NonNullable<
    Array<WordPositioned>
  >

  return filteredExtendedWords
}
