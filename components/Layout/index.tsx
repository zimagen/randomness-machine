// (1) import層
import React from 'react'
import BottomNavi from '@/components/BottomNavi'
// (2) Types層
type ContainerProps = {}
type Props = {}

// (3) DOM層
const Component: React.FCX<Props> = (props) => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-3 fixed w-full z-60">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span className="relative text-xl pl-8">
            <img
              src="/svg/logo-sample.svg"
              className="absolute inset-0"
              alt="logo"
            />
            Randomness Machine
          </span>
        </a>
      </div>

      <div className="block">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-900 hover:text-white hover:border-white"
        >
          <img src="/svg/menu.svg" alt="menu" />
        </button>
      </div>
    </nav>

    <div className="container mx-auto bg-white pt-16 h-full">
      {props.children}
      <BottomNavi />
    </div>
  </>
)

// (4) Style層

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
