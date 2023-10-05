'use client'
import styled from 'styled-components'

export type WordContainerProps = {
  x: number
  y: number
  delay: number
}

export const WordContainer = styled.span<WordContainerProps>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`
