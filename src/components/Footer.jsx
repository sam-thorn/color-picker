import React from 'react'

import repoLink from './github.svg'

function Footer () {
  return (
    <footer className='repo-link-container'>
      <a className='repo-link' href='https://github.com/sam-thorn/Gimme-Gimme'>
        <img className='repo-image' src={repoLink} alt='link to repo' />
      </a>
    </footer>
  )
}

export default Footer
