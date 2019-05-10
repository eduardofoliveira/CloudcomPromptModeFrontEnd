/**
 * Types
 */
export const Types = {
  LIST_REQUEST: "usuarios/LIST_REQUEST",
  LIST_SUCCESS: "usuarios/LIST_SUCCESS",
  LIST_FAILURE: "usuarios/LIST_FAILURE"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  users: [],
  error: null
};

export default function usuarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        error: null
      };
    case Types.LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  listRequest: () => ({
    type: Types.LIST_REQUEST,
    payload: {}
  }),

  listSuccess: users => ({
    type: Types.LIST_SUCCESS,
    payload: { users }
  }),

  listFailure: error => ({
    type: Types.LIST_FAILURE,
    payload: { error }
  })
};
