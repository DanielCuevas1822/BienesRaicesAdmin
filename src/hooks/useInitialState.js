import { useEffect, useState } from "react";

export const useInitialState = () => {
  const [initialState, setinitialState] = useState({});

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/propiedades.json`
      )
        .then((response) => response.json())
        .then((data) => {
          let propiedadesData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let concatInfo = { ...newinfo, ...newid };              
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
      fetch(`${process.env.REACT_APP_FIREBASE_URL}/blog.json`)
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
        `${process.env.REACT_APP_FIREBASE_URL}/testimoniales.json`
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

  return initialState;
};

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
