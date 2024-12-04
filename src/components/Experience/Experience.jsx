import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import CountUp from 'react-countup';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>
        <CountUp start={0} end={6} duration={3} />
          </div>
        <span  style={{color: darkMode?'white':''}}>Programming Experience</span>
        {/* <span>Experience</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp start={0} end={15} duration={3} /></div>
        <span  style={{color: darkMode?'white':''}}>Projects completed </span>
        {/* <span>Projects</span> */}
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp start={0} end={50} duration={3} /></div>
        <span  style={{color: darkMode?'white':''}}> Features Added</span>
        {/* <span>Added</span> */}
      </div>
    </div>
  );
};

export default Experience;
