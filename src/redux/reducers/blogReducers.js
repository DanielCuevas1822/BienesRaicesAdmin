import { NEW_BLOG, UPDATE_BLOG, DELETE_BLOG } from "../actions/blogActions";

const blog_reducer = (state = [], action) => {
  switch (action.type) {
    case NEW_BLOG: {
      return state;
    }
    case UPDATE_BLOG: {
      return state;
    }
    case DELETE_BLOG: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default blog_reducer;
