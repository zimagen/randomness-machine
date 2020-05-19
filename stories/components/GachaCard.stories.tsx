import * as React from 'react'
import GachaCard from '@/components/GachaCard'
import { Gacha } from '@/hooks/useGacha'

export default {
  title: 'GachaCard'
}

const gacha: Gacha = {
  title: 'test title',
  imageUrl: 'https://via.placeholder.com/250x200',
  count: 10
}

export const sample = () => <GachaCard gacha={gacha} />
