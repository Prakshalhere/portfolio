import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaCode } from "react-icons/fa";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 1,
  //   type: "spring",
  // };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>About</span>
        {/* <span>My Services</span> */}
        <span>
          I’m Prakshal Jain, a passionate Full-Stack Developer who enjoys
          creating dynamic and interactive web applications. With a background
          in computer engineering and a love for solving complex problems, I
          specialize in both frontend and backend development, ensuring that
          each project is user-focused and technically robust. <br />
          <br /> After completing my post-graduate course in web development, I
          immersed myself in the world of coding, from building responsive
          websites to working with modern frameworks like React and Node.js.{" "}
          <br />
          <br /> Every project I take on excites me, as I’m always looking for
          ways to learn and grow.
        </span>
        <span style={{ color: darkMode ? "white" : "" }}>Education</span>
        <span>
          I hold a <strong> Post-graduate Certificate in Web Development</strong> from Conestoga
          College and a <strong>Bachelor’s Degree in Computer Engineering</strong> from Gujarat
          Technical University. My academic journey has provided me with a solid
          foundation in algorithms, databases, and software design, complemented
          by hands-on experience with modern web technologies like React,
          Express, and MongoDB. These skills have been instrumental in shaping
          my approach to building efficient, user-centric web applications.{" "}
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "14rem" }}
          // whileInView={{ left: "14rem" }}
          // transition={transition}
        >
          <Card
            icon={<FaLaptopCode size={125} color="#4CAF50" />}
            heading={"Front-End Development"}
            detail={
              "Creating engaging, responsive, and user-friendly interfaces with modern technologies like React, HTML, CSS, and JavaScript."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-4rem", top: "12rem" }}
          // whileInView={{ left: "-4rem" }}
          // transition={transition}
        >
          <Card
            icon={<FaDatabase size={125} color="#2196F3" />}
            heading={"Back-End Development"}
            detail={
              "Building robust back-end systems with Node.js, Express, and databases (SQL, NoSQL) to ensure scalability and performance."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "12rem" }}
          // whileInView={{ left: "12rem" }}
          // transition={transition}
        >
          <Card
            icon={<FaCode size={125} color="#FFC107" />}
            heading={"Full-Stack Development"}
            detail={
              "Combining front-end and back-end skills to develop complete web applications, integrating various technologies to meet client needs."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
