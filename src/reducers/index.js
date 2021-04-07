import {combineReducers} from "redux";
import messagesReducer from "./messages";
import userNameReducer from "./userName";
import reactionsReducer from "./reactions";
export default combineReducers({
  messages: messagesReducer,
  userName: userNameReducer,
  reactions: reactionsReducer,
});
