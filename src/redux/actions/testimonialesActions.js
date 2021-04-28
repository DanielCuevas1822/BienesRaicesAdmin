export const NEW_TESTIMONIALES = "NEW_TESTIMONIALES";
export const UPDATE_TESTIMONIALES = "UPDATE_TESTIMONIALES";
export const DELETE_TESTIMONIALES = "DELETE_TESTIMONIALES";

export const new_testimoniales_action = (payload) => ({
  type: NEW_TESTIMONIALES,
  payload,
});

export const update_testimoniales_action = (payload) => ({
  type: UPDATE_TESTIMONIALES,
  payload,
});

export const delete_testimoniales_action = (payload) => ({
  type: DELETE_TESTIMONIALES,
  payload,
});
