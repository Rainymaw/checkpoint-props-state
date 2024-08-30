import React from "react";

function Choice({ src, value, setChoice}) {
  let handleClick = () => {
    setChoice(value);
  };

  return (
    <div className={value + " image-container"}>
      <img src={src} alt="" onClick={() => handleClick()} />
    </div>
  );
}

export default Choice;
