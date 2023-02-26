import React from "react";
import "./Details.css";
import Button from "./Button";
const Details = ({
  heading1,
  heading2,
  subHeading,
  para1,
  para2,
  para3,
  background,
  name
}) => {
  return (
    <div
      className="details"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1>{heading1}</h1>
      <h1>{heading2}</h1>
      <h2>{subHeading}</h2>
      <p>{para1}</p>
      <p>{para2}</p>
      <p className="para">{para3}</p>
      <Button buttonName= {name}/>
    </div>
  );
};

export default Details;
