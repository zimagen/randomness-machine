// (1) import層
import React from 'react'
import styled from 'styled-components'
import { Gacha } from '@/hooks/useGacha'

// (2) Types層
type Props = {
  gacha: Gacha
}
type ContainerProps = Props & {}

// (3) DOM層
const Component: React.FCX<Props> = ({ className, gacha }) => (
  <div
    className={
      className + ' my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
    }
  >
    <article className="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={gacha.imageUrl}
        />
      </a>

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <a className="no-underline hover:underline text-black" href="#">
            {gacha.title}
          </a>
        </h1>
        <p className="text-grey-darker text-sm">{gacha.count}</p>
      </header>
    </article>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
