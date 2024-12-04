import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


// Import logos 
import htmlLogo from "../../img/html.svg";
import cssLogo from "../../img/css.svg";
import jsLogo from "../../img/javascript.svg";
import reactLogo from "../../img/react.svg";
import bsLogo from "../../img/bootstrap.svg";
import twLogo from "../../img/tailwind.jpg";
import contextLogo from "../../img/contextAPI.jpg";

import nodeLogo from "../../img/node.svg";
import mongoLogo from "../../img/mongo.svg";
import expressLogo from "../../img/express1.png";
import jwtLogo from "../../img/jwt.png";
import authLogo from "../../img/auth.jpg";
import restLogo from "../../img/restapi.png";
import stripeLogo from "../../img/stripe.png";

import gitLogo from "../../img/git.svg";
import figmaLogo from "../../img/figma.png";
import jiraLogo from "../../img/jira.png";
import postmanLogo from "../../img/postman.png";
import eslintLogo from "../../img/eslint.png";
import ghactionLogo from "../../img/ghaction.png";
import wpLogo from "../../img/webpack.svg";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  const skills = [
    { category: "Frontend", items: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "React", logo: reactLogo },
        { name: "Bootstrap", logo: bsLogo },
        { name: "TailWind", logo: twLogo },
        { name: "Context API", logo: contextLogo },
      ],
    },
    { category: "Backend", items: [
        { name: "Node.js", logo: nodeLogo },
        { name: "Express", logo: expressLogo },
        { name: "MongoDB", logo: mongoLogo },
        { name: "JWT", logo: jwtLogo },
        { name: "Restful APIs", logo: restLogo },
        { name: "Auth0", logo: authLogo },
        { name: "Stripe", logo: stripeLogo },
        
      ],
    },
    { category: "Tools", items: [
        { name: "Git", logo: gitLogo },
        { name: "Figma", logo: figmaLogo },
        { name: "Jira", logo: jiraLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "ESLint", logo: eslintLogo },
        { name: "Github Actions", logo: ghactionLogo },
        { name: "Web pack", logo: wpLogo },

      ],
    },
  ];

  return (
    <div className="skills-page" id="skills">
      {/* Page Header */}
      <div className="skills-header">
        <span>Technical Skills</span>
        
        <span>
          I’m skilled in modern web development technologies and tools, enabling me
          to build robust and visually appealing web applications.
        </span>
      </div>

      {/* Skills Content */}
      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="skills-category"
          >
            <h3>{skillCategory.category}</h3>
            <div className="skills-items">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Blur */}
      <div
        className="blur skills-blur"
        style={{ background: darkMode ? "#333" : "#ABF1FF94" }}
      ></div>
    </div>
  );
};

export default Skills;
