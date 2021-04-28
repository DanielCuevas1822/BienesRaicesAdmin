const NEW_TESTIMONIALES = "NEW_TESTIMONIALES";
const UPDATE_TESTIMONIALES = "UPDATE_TESTIMONIALES";
const DELETE_TESTIMONIALES = "DELETE_TESTIMONIALES";

const new_testimoniales_action = (payload) => ({
  type: NEW_TESTIMONIALES,
  payload,
});

const update_testimoniales_action = (payload) => ({
  type: UPDATE_TESTIMONIALES,
  payload,
});

const delete_testimoniales_action = (payload) => ({
  type: DELETE_TESTIMONIALES,
  payload,
});
