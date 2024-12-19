import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/pic.jpeg";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 2, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sachin Aggarwal
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "A Developer",
                "A DevOps Engineer",
                "A Cricket Enthusiast",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:aggarwalsachin1818@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>aggarwalsachin1818@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      {/* <section>
        <img src={me} alt="Sachin" />
      </section> */}

<section>
  <img
    src={me}
    alt="Sachin"
    style={{
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Adds a shadow for a 3D effect
      objectFit: "cover", // Ensures the image covers the frame beautifully
      margin: "20px auto", // Centers the image in its container
      display: "block", // Centers image
    }}
  />
</section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
