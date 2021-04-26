import React from "react";
import { useHistory } from "react-router";

const NotAccess = (props) => {
  let history = useHistory();

  const handleClick = () => {
    props.handleAccess();
    localStorage.removeItem("userinfo");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>You are not access :c</h1>
          <button onClick={handleClick}>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default NotAccess;
