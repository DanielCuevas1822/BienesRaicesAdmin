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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [haveAccess, setHaveAcces] = useState(false);
  const [initialState, setinitialState] = useState({});

  useEffect(() => {
    Promise.all([
      fetch(
        "https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades.json"
      )
        .then((response) => response.json())
        .then((data) => {
          let propiedadesData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let concatInfo = { ...newid, ...newinfo };
              propiedadesData.push(concatInfo);
            }
          }
          return {
            propiedades: propiedadesData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
      fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog.json")
        .then((response) => response.json())
        .then((data) => {
          let notasData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let blogInfo = { ...newid, ...newinfo };
              notasData.push(blogInfo);
            }
          }
          return {
            blog: notasData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
      fetch(
        "https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales.json"
      )
        .then((response) => response.json())
        .then((data) => {
          let testimonialesData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let testimonialesInfo = { ...newid, ...newinfo };
              testimonialesData.push(testimonialesInfo);
            }
          }
          return {
            testimoniales: testimonialesData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
    ]).then((results) => {
      let newresults = {};
      results.map((item) => {
        newresults = { ...newresults, ...item };
        return null;
      });
      setinitialState(newresults);
    });
  }, []);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

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
