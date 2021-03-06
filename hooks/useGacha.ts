import { useCallback } from 'react'
import { useLocalStorageRecoilState } from '@/hooks/useLocalStorageRecoilState'
import { localStorageAtom } from '@/helper/localStorageAtom'

export type Gacha = {
  title: string
  imageUrl: string
  count: number
}

const gachaState = localStorageAtom<Gacha[]>({
  key: 'gachaState',
  default: []
})

export const useGacha = () => {
  const [gachas, setGachas] = useLocalStorageRecoilState(gachaState)

  const add = useCallback(
    (gacha: Gacha) => {
      setGachas((gachaList) => [...gachaList, gacha])
    },
    [setGachas]
  )

  const edit = useCallback(
    (id: number, gacha: Gacha) => {
      setGachas((gachaList) => gachaList.map((v, i) => (i === id ? gacha : v)))
    },
    [setGachas]
  )

  return {
    gachas,
    add,
    edit
  }
}
