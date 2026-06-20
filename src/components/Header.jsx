import React from 'react'
import { logo_URL } from '../utils/logo_URL'

const Header = () => {
  return (
    <div className='absolute w-50 px-8 py-2 bg-linear-to-b from-black z-10'>
        <img src={logo_URL} alt='logo' />
    </div>
  )
}

export default Header