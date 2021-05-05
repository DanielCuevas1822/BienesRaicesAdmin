import {
  NEW_TESTIMONIALES,
  UPDATE_TESTIMONIALES,
  DELETE_TESTIMONIALES,
} from "../actions/testimonialesActions";

const testimoniales_reducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TESTIMONIALES: {
      return [...state, action.payload];
    }
    case UPDATE_TESTIMONIALES: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            nombre_testimonial: action.payload.nombre_testimonial,
            testimonio: action.payload.testimonio,
          };
        }
        return item;
      });
    }
    case DELETE_TESTIMONIALES: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default testimoniales_reducer;
