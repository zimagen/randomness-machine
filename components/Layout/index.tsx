// (1) import層
import React from 'react'
// (2) Types層
type ContainerProps = {}
type Props = {}

// (3) DOM層
const Component: React.FCX<Props> = (props) => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-3 fixed w-full z-60 top-0">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="#"
        >
          <span className="relative text-xl pl-8">
            <img src="/logo-sample.svg" className="absolute inset-0" />{' '}
            Randomness Machine
          </span>
        </a>
      </div>

      <div className="block">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-900 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>

    <div className="container mx-auto bg-white pt-12 h-full">
      {props.children}
    </div>
  </>
)

// (4) Style層

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
