import React from "react";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
import {
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { UseScroll } from "../components/UseScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  const [element3, controls3] = UseScroll();
  return (
    <>
      <Work
        style={{ background: "#1b1b1b" }}
        variants={PageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {" "}
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Movie
          ref={element3}
          variants={fade}
          animate={controls3}
          initial="hidden"
        >
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
        <Movie
          ref={element}
          variants={fade}
          animate={controls}
          initial="hidden"
        >
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <img src={racer} alt="racer" />
          </Link>
        </Movie>
        <Movie
          ref={element2}
          variants={fade}
          animate={controls2}
          initial="hidden"
        >
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="good-times" />
          </Link>
        </Movie>
        <ScrollTop />
      </Work>
    </>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1250px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    color: white;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #1b1b1b;
`;

const Frame3 = styled(Frame1)`
  background: #d96ed4;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
