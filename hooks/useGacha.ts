import { useRecoilState, atom } from 'recoil'
import { useCallback } from 'react'

export type Gacha = {
  title: string
  imageUrl: string
  count: number
}

const gachaState = atom<Gacha[]>({
  key: 'gachaState',
  default: []
})

export const useGacha = () => {
  const [gachas, setGachas] = useRecoilState(gachaState)

  const add = useCallback(
    (gacha: Gacha) => {
      setGachas((gachaList) => {
        gachaList.push(gacha)
        return gachaList
      })
    },
    [setGachas]
  )
  return {
    gachas,
    add
  }
}
