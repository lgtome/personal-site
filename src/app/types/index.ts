export type Word = { word: string }

export type Words = Array<Word>

export type WordAdjusted = Word & { delay: number }

export type Positions = { x: number; y: number }

export type ExtendedPositions = {
  x: {
    from: number
    to: number
  }
  y: {
    from: number
    to: number
  }
}

export type WordPositioned = WordAdjusted & Positions

export type Dimensials = {
  height: number
  width: number
}
