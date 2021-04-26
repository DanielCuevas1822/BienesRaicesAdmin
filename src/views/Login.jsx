import React, { useState } from "react";
import { mykey, urlSignIn } from "../utils/firebase.js";
import "../styles/views/Login.scss";

const Login = (props) => {

  const [dataLogin, setDataLogin] = useState({
    email: "lolitastest@gmail.com",
    password: "lolas1234",
    returnSecureToken: true,
  });

  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${urlSignIn}?key=${mykey}`, {
      method: "POST",
      body: JSON.stringify(dataLogin),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        localStorage.setItem("userinfo", JSON.stringify(data));        
        props.handleAccess();
      })
      .catch(function (error) {
        console.warn("Something went wrong.", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login col d-flex justify-content-center align-items-center">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="ejemplo@mail.com"
                name="email"
                value={dataLogin.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                name="password"
                value={dataLogin.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
