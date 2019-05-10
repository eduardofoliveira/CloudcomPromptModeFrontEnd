import { combineReducers } from "redux";

import login from "./login";
import usuarios from "./usuarios";

export default combineReducers({
  login,
  usuarios
});
