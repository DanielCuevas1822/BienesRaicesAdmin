import {
  NEW_PROPIEDADES,
  UPDATE_PROPIEDADES,
  DELETE_PROPIEDADES,
} from "../actions/propiedadesActions";

const propiedades_reducer = (state = [], action) => {
  switch (action.type) {
    case NEW_PROPIEDADES: {
      return state;
    }
    case UPDATE_PROPIEDADES: {
      return state;
    }
    case DELETE_PROPIEDADES: {
      return state;
    }
    default:
      return state;
  }
};

export default propiedades_reducer;
