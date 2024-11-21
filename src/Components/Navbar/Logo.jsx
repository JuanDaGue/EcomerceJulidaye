import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
      <Link to="/shopi">
        <img src="/Asimplelogo.png" alt="Logo" className="h-10 object-contain" />
      </Link>
    </div>
  );
};

export default Logo;
