// (1) import層
import React, { useCallback, useRef } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { useGacha, Gacha } from '@/hooks/useGacha'
import { useRecoilCallback } from 'recoil'
import { useRouter } from 'next/router'

// (2) Types層
type Props = {
  handleClick: () => void
  formRef: React.RefObject<HTMLFormElement>
}

// (3) DOM層
const Component: React.FCX<Props> = ({ className, handleClick, formRef }) => (
  <div className={className}>
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault()
        return handleClick()
      }}
    >
      <input className="border border-gray-500" type="text" name="gachaTitle" />
      <input className="border border-gray-500" type="text" name="imageUrl" />
      <input className="border border-gray-500" type="number" name="count" />

      <button type="submit">add</button>
    </form>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Page: NextPage<Props> = (props) => {
  const { add } = useGacha()
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const handleClick = useCallback(() => {
    const title = formRef.current?.gachaTitle?.value
    const imageUrl = formRef.current?.imageUrl?.value
    const count = Number(formRef.current?.count?.value)
    add({
      title,
      imageUrl,
      count
    })
    router.push('/gacha-list')
  }, [add, router])

  const componentProps = {
    handleClick,
    formRef
  }

  return <StyledComponent {...props} {...componentProps} />
}

export default Page
