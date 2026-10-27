import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const { openModal, openSideBar } = useContext(AppContext)

  return (
    <main>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
      <button className="btn" onClick={openSideBar}>
        show sidebar
      </button>
    </main>
  )
}

export default Home