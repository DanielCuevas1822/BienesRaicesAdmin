import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./redux/reducers/rootReducers";

import "./styles/main.scss";

import Header from "./components/Header";
import Loader from "./components/Loader";

import Login from "./views/Login";
import Home from "./views/Home";
import Propiedades from "./views/Propiedades";
import Blog from "./views/Blog";
import Testimoniales from "./views/Testimoniales";
import NotAccess from "./views/NotAccess";
import { useInitialState, composeEnhancers } from "./hooks/useInitialState";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [haveAccess, setHaveAcces] = useState(false);

  const initialState = useInitialState();
  const store = createStore(rootReducers, initialState, composeEnhancers);

  useEffect(() => {
    const isLogIn = JSON.parse(localStorage.getItem("userinfo"));
    setIsLoading(false);
    isLogIn ? setHaveAcces(true) : setHaveAcces(false);
  }, [haveAccess]);

  const handleAccess = () => {
    setHaveAcces(!haveAccess);
  };

  return (
    <Provider store={store}>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {haveAccess ? (
              <React.Fragment>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/propiedades">
                    <Propiedades />
                  </Route>
                  <Route exact path="/blog">
                    <Blog />
                  </Route>
                  <Route exact path="/testimoniales">
                    <Testimoniales />
                  </Route>
                  <Route exact path="/notaccess">
                    <NotAccess handleAccess={handleAccess} />
                  </Route>
                </Switch>
              </React.Fragment>
            ) : (
              <Login handleAccess={handleAccess} />
            )}
          </React.Fragment>
        )}
      </div>
    </Provider>
  );
}

export default App;
