import {v4 as uuidv4} from "uuid";

export const createReaction = ({type, emoji, userName, messageId}) => {
  return {type, item: {id: uuidv4(), timeStamp: Date.now(), emoji, userName, messageId}};
};
