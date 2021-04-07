import React from "react";
import {connect} from "react-redux";
import messagesReducer from "../reducers/messages";
import CreateReaction from "./CreateReaction";
//Functional Component
const MessageReactions = ({messageReactions}) => {
  if (!messageReactions) return null;

  return messageReactions.map((reaction, index) => {
    const {id, emoji, userName} = reaction;
    return (
      <span key={id}>
        <em>{userName}:</em>
        {"   "} {emoji}
        {index !== messageReactions.length - 1 ? ", " : ""}
      </span>
    );
  });
};

const MessageBoard = ({messages, reactions}) => {
  console.log("messages in msgboard", messages);
  return (
    <div>
      {messages.items.map((messageItem) => {
        const {id, text, timeStamp, userName} = messageItem;
        return (
          <div key={id}>
            <h4>{new Date(timeStamp).toLocaleString()}</h4>
            <p>{text}</p>
            <h4>- {userName}</h4>
            <CreateReaction messageId={id} />
            <MessageReactions messageReactions={reactions[id]} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default connect(({messages, reactions}) => ({messages, reactions}))(MessageBoard);
