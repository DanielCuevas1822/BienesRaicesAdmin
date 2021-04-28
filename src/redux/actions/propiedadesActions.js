export const NEW_PROPIEDADES = "NEW_PROPIEDADES";
export const UPDATE_PROPIEDADES = "UPDATE_PROPIEDADES";
export const DELETE_PROPIEDADES = "DELETE_PROPIEDADES";

export const new_propiedades_action = (payload) => ({
  type: NEW_PROPIEDADES,
  payload,
});

export const update_propiedades_action = (payload) => ({
  type: UPDATE_PROPIEDADES,
  payload,
});

export const delete_propiedades_action = (payload) => ({
  type: DELETE_PROPIEDADES,
  payload,
});
