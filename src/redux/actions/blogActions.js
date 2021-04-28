export const NEW_BLOG = "NEW_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";

export const new_blog_action = (payload) => ({
  type: NEW_BLOG,
  payload,
});

export const update_blog_action = (payload) => ({
  type: UPDATE_BLOG,
  payload,
});

export const delete_blog_action = (payload) => ({
  type: DELETE_BLOG,
  payload,
});
