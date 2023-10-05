'use client'
import React from 'react'
import { WordContainer, WordContainerProps } from './styles'
import { motion } from 'framer-motion'
interface Props extends WordContainerProps {
  children: JSX.Element | string
}

export const Word = ({ children, delay, ...rest }: Props) => {
  return (
    <WordContainer
      as={motion.div}
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.85,
        delay: delay / 100,
        ease: [0, 0.61, 0.3, 1.1],
      }}
      delay={delay}
      {...rest}
    >
      {children}
    </WordContainer>
  )
}
