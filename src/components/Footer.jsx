import React from 'react';
import me4 from '../assets/me4.jpeg'; // Adjust path based on your file structure.
import { AiFillGithub, AiFillInstagram, AiOutlineArrowUp,AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
      <footer>
        <div style={{ textAlign: "center" }}>
          <img
            src={me4}
            alt="ME"
            style={{
              width: "70px", // Adjust to the desired width
              height: "70px", // Adjust to the desired height
              objectFit: "cover", // Ensures the image covers the container
              borderRadius: "50%", // Optional: Makes the image circular
            }}
          />
          <h2>Sachin Aggarwal</h2>
          <p>FrontEnd Developer.</p>
        </div>
  
        <aside>
          <h2>Social Media</h2>
          <article>
            <a href="https://www.instagram.com/sach_18_in/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
            <a href="https://github.com/sachinaggarwal18" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/sachin-aggarwal-32b162227/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </article>
        </aside>
  
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </footer>
    );
  };
  
  export default Footer;