import { useRecoilState, atom } from 'recoil'
import { useCallback } from 'react'

const isServer = typeof window === 'undefined'

export type Gacha = {
  title: string
  imageUrl: string
  count: number
}

let storageGachas
if (!isServer) {
  storageGachas = window.localStorage.getItem('gachaState')
}

const gachaState = atom<Gacha[]>({
  key: 'gachaState',
  default: storageGachas ? JSON.parse(storageGachas) : []
})

export const useGacha = () => {
  const [gachas, setGachas] = useRecoilState(gachaState)

  const add = useCallback(
    (gacha: Gacha) => {
      setGachas((gachaList) => [...gachaList, gacha])
      window.localStorage.setItem(
        'gachaState',
        JSON.stringify([...gachas, gacha])
      )
    },
    [gachas, setGachas]
  )

  return {
    gachas,
    add
  }
}
