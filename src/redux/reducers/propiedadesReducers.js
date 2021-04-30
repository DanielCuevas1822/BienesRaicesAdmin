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
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default propiedades_reducer;
