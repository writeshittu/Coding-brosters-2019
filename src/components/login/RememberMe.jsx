import React from "react";
import { Link } from "react-router-dom";

const RememberMe = () => {
  return (
    <div className="flex justify-between -mt-4 mb-10">
      <span className="text-sm">
        <input type="checkbox" value="" />
        Remember Me
      </span>
      <Link to="/password-Reset" className="text-red-500 text-sm">
        Forgot password?
      </Link>
    </div>
  );
};

export default RememberMe;
