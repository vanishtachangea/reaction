import React, {Component} from "react";
import {connect} from "react-redux";
import {PubSubContext} from "../pubsub";
import {newMessage} from "../actions/messages";

// const pubsub = new PubSub();
class PublishMessage extends Component {
  state = {text: ""};
  updateText = (event) => this.setState({text: event.target.value});
  publishMessage = () => {
    console.log("inside publish", this.state, " this.props", this.props);
    const {text} = this.state;
    const {userName} = this.props;
    this.context.pubsub.publish(newMessage({text, userName}));
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.pubishMessage();
    }
  };
  render() {
    console.log("this", this);
    return (
      <div>
        <h3>Got something to say?</h3>
        <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />{" "}
        <button onClick={this.publishMessage}>Publish to Channel!</button>
      </div>
    );
  }
}
PublishMessage.contextType = PubSubContext;
// export default PublishMessage;
export default connect(({userName}) => ({
  userName,
}))(PublishMessage);
