import {SET_USERNAME} from "../actions/types";
const DEFAULT_USERNAME = "anonymous";
const userNameReducer = (state = DEFAULT_USERNAME, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.userName;
    default:
      return state;
  }
};
export default userNameReducer;
