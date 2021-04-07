import React, {Component} from "react";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import SetUserName from "./SetUserName";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Public Channel!!</h2>
        <SetUserName />
        <hr />
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    );
  }
}

export default App;
