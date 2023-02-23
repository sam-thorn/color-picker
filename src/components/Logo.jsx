import React from 'react'

import GimmeGimmeLogo from './GimmeGimmeLogo.svg'

function Logo () {
  return (
    <div className='logo-block'>
      <img className='logo' src={GimmeGimmeLogo} alt='page logo' />
      <h2 id='logo-block-copy'>Grab yourself some colors to use in your app!</h2>
    </div>
  )
}

export default Logo
