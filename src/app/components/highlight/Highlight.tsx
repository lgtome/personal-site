'use client'
import React from 'react'
import { WordAdjusted } from '../../types'
import { useWindowSize } from '../../hooks/useWindowSize'
import { HighlightContainer } from './styles'
import { Compute } from './common/compute/Compute'
import { motion } from 'framer-motion'

interface Props {
  children: string
}

export const Highlight = ({ children }: Props) => {
  const [ref, dimensials] = useWindowSize()

  const words = children.split(' ')

  const adjustedWords: Array<WordAdjusted> = words.map((word, index) => {
    const delay = (index + 1) * (100 * Math.random() - Math.random())

    return { word, delay, index }
  })

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }
  return (
    <HighlightContainer as={motion.div} ref={ref}>
      {dimensials && <Compute words={adjustedWords} dimensials={dimensials} />}
    </HighlightContainer>
  )
}
