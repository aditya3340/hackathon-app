import React from "react";

const ButtonComponent = ({ children, text }) => {

  return (
    <div className={`border border-gray-300 text-xs md:text-sm text-gray-400 text-center font-semibold px-3 py-1 rounded-md flex items-center justify-center  cursor-pointer hover:bg-gray-300 ${text == "Delete" ? "hover:bg-red-900 hover:text-white": "hover:text-gray-900"}`}>
      {children}
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default ButtonComponent;
