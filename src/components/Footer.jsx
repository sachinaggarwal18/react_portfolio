import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineArrowUp,AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>

        <div>
            <img src="src/assets/me4.jpeg" alt="ME" />
            <h2>Sachin Aggarwal</h2>
            <p>Devops Engineer.</p>
        </div>

    <aside>

    <h2>Social Media</h2>

    <article>
        <a href="https://www.instagram.com/sach_18_in/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram/>
        </a>
        <a href="https://github.com/sachinaggarwal18" target="_blank" rel="noopener noreferrer">
            <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/sachin-aggarwal-32b162227/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
        
    </article>

    </aside>

    <a href="#home"><AiOutlineArrowUp/></a>

    </footer>
  )
}

export default Footer
