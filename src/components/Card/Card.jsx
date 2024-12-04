import React from "react";
import "./Card.css";

const Card = ({icon, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
       <div className="card-icon">{icon}</div>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
