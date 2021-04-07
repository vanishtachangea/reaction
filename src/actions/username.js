import {SET_USERNAME} from "./types";

export const setUserName = (userName) => ({
  type: SET_USERNAME,
  userName,
});
