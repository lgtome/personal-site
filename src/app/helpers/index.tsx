import { WordAdjusted, WordPositioned, Positions, Dimensials } from '../types'



export function notEmpty(dataType: Array<any> | object | null | undefined) {
  if (dataType == null || dataType == undefined) {
    return false
  }

  if (Array.isArray(dataType)) {
    return dataType.length ? true : false
  }
  return Object.keys(dataType).length ? true : false
}

export function generateRandomCoords() {}

