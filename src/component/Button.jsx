import React from "react";

const Button = ({name,styles,onClick}) => {
  return <button className={`${styles} w-[80px] border-4 border-indigo-500/100 mr-2`} onClick={onClick}>{name}</button>;
};

export default Button;