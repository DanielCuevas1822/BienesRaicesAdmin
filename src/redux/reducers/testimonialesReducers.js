import {
  NEW_TESTIMONIALES,
  UPDATE_TESTIMONIALES,
  DELETE_TESTIMONIALES,
} from "../actions/testimonialesActions";

const testimoniales_reducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_TESTIMONIALES: {
      return state;
    }
    case UPDATE_TESTIMONIALES: {
      return state;
    }
    case DELETE_TESTIMONIALES: {
      return state;
    }
    default:
      return state;
  }
};

export default testimoniales_reducer;
