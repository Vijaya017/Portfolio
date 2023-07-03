import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vijaya-sinha/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Vijaya017" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/royalroarrr/" target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials


