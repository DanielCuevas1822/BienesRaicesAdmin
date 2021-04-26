import React, { useEffect, useState } from "react";
import NotAccess from "./NotAccess";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [haveAccess, setHaveAcces] = useState(false);

  useEffect(() => {
    const isLogIn = JSON.parse(localStorage.getItem("userinfo"));
    setIsLoading(false);
    isLogIn ? setHaveAcces(true) : setHaveAcces(false);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {haveAccess ? (
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                  <h1>Welcome!</h1>
                </div>
              </div>
            </div>
          ) : (
            <NotAccess />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
