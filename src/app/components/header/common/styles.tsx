import styled from 'styled-components'
import { DividerProps } from './types'

export const DividerContainer = styled.hr<Partial<DividerProps>>`
  width: 60%;
  color: ${({ color }) => color || 'gray'};
  border: 1px solid #5c5757;
`
