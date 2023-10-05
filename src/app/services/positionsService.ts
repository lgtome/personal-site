import { Dimensials, ExtendedPositions, WordAdjusted } from '../types'
type WordPositions = [ExtendedPositions, WordAdjusted]
export class PositionsService {
  points: Set<WordPositions> = new Set<WordPositions>()
  heightLine: number = 25
  deviation: number = 12
  dimensials: Dimensials

  constructor(dimensials: Dimensials) {
    this.dimensials = dimensials
  }

  private add([points, word]: WordPositions) {
    this.points.add([points, word])
  }

  public getPoints() {
    return [...this.points.values()]
  }

  public generate(data: WordAdjusted): WordPositions | undefined {
    const { word } = data
    const length = word.length
    const { height, width } = this.dimensials
    const minWidthPosition = 0
    const minHeightPosition = this.heightLine
    const maxHeightPosition = height - this.heightLine
    const maxWidthPosition = Math.floor(width - length * this.deviation)

    const h = this.getRandomValue(minHeightPosition, maxHeightPosition)
    const w = this.getRandomValue(minWidthPosition, maxWidthPosition)

    const extendedPoints = this.find(w, h, data)
    if (!extendedPoints) {
      return undefined
    }
    this.add(extendedPoints)

    return extendedPoints
  }
  public find(
    x: number,
    y: number,
    data: WordAdjusted,
  ): WordPositions | undefined {
    const { word } = data
    const length = word.length
    const wordLineSize = length * 10
    for (let [points] of this.points.values()) {
      const { x: xAxis, y: yAxis } = points
      if (
        this.inRange(x - this.deviation, xAxis.from, xAxis.to) ||
        this.inRange(x + this.deviation, xAxis.from, xAxis.to)
      ) {
        this.generate(data)
        return undefined
      }
      if (
        this.inRange(y - this.deviation, yAxis.from, yAxis.to) ||
        this.inRange(y + this.deviation, yAxis.from, yAxis.to)
      ) {
        this.generate(data)
        return undefined
      }
    }
    const extendedX = { from: x, to: x + wordLineSize }
    const extendedY = { from: y, to: y + this.heightLine }

    return [{ x: extendedX, y: extendedY }, data]
  }

  public getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  public inRange(num: number, min: number, max: number) {
    return (num - min) * (num - max) <= 0
  }
  public flush() {
    this.points.clear()
  }
}
