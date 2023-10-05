'use client'

import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Dimensials } from '../types'

export function useWindowSize(): [
  MutableRefObject<HTMLDivElement | null>,
  Dimensials | null,
] {
  const [dimensials, setDimensions] = useState<Dimensials | null>(null)
  const documentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = documentRef.current
    const handler = () => {
      if (element) {
        setDimensions({
          width: element.clientWidth,
          height: element.clientHeight,
        })
      }
    }
    if (element) {
      setDimensions({
        width: element.clientWidth,
        height: element.clientHeight,
      })
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return [documentRef, dimensials]
}
