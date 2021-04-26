import React from "react";
import { Link } from "react-router-dom";

const NotAccess = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>You are not access :c</h1>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NotAccess;
