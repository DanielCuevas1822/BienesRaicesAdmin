import { NEW_BLOG, UPDATE_BLOG, DELETE_BLOG } from "../actions/blogActions";

const blog_reducer = (state = [], action) => {
  switch (action.type) {
    case NEW_BLOG: {
      return [...state, action.payload];
    }
    case UPDATE_BLOG: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            nombre_nota: action.payload.nombre_nota,
            descri_corta: action.payload.descri_corta,
            descri_larga: action.payload.descri_larga,
            imagen_nota: action.payload.imagen_nota,
            creador: action.payload.creador,
            fecha_nota: action.payload.fecha_nota,
          };
        }
        return item;
      });
    }
    case DELETE_BLOG: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default blog_reducer;
