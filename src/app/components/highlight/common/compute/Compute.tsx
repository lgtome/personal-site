import React, { FC, useId } from 'react'
import { positionWords } from '../../../../helpers/position'
import { Dimensials, WordAdjusted, WordPositioned } from '../../../../types'
import { Word } from '../word/Word'

type ComputeProps = {
  words: Array<WordAdjusted>
  dimensials: Dimensials
}

export const Compute: FC<ComputeProps> = ({ words, dimensials }) => {
  const id = useId()

  const positionedWords: Array<WordPositioned> = positionWords(
    words,
    dimensials,
  )
  return (
    <>
      {positionedWords.map(({ word, ...rest }, index) => (
        <Word key={`${id}-${index}`} {...rest}>
          {word}
        </Word>
      ))}
    </>
  )
}
