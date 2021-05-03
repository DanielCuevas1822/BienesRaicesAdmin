import {
  NEW_PROPIEDADES,
  UPDATE_PROPIEDADES,
  DELETE_PROPIEDADES,
} from "../actions/propiedadesActions";

const propiedades_reducer = (state = [], action) => {
  switch (action.type) {
    case NEW_PROPIEDADES: {
      return [...state, action.payload];
    }
    case UPDATE_PROPIEDADES: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            nombre_propiedad: action.payload.nombre_propiedad,
            desc_corta: action.payload.desc_corta,
            desc_larga: action.payload.desc_larga,
            imagen: action.payload.imagen,
            precio_propiedad: action.payload.precio_propiedad,
            numero_banos: action.payload.numero_banos,
            numero_estaci: action.payload.numero_estaci,
            numero_recama: action.payload.numero_recama,
          };
        }
        return item;
      });
    }
    case DELETE_PROPIEDADES: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};

export default propiedades_reducer;
