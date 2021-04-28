import { combineReducers } from "redux";
import blogReducers from "./blogReducers";
import propiedadesReducers from "./propiedadesReducers";
import testimonialesReducers from "./testimonialesReducers";

const rootReducers = combineReducers({
  blog: blogReducers,
  propiedades: propiedadesReducers,
  testimoniales: testimonialesReducers,
});

export default rootReducers;
