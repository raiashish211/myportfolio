import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiHackerrank } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/theraiashish" target={'_blank'}><BsLinkedin /></a>
            <a href="https://github.com/raiashish211" target={'_blank'}><BsGithub /></a>
            <a href="https://www.hackerrank.com/AshishRai11" target={'_blank'}><SiHackerrank /></a>

        </div>
    )
}

export default HeaderSocials
