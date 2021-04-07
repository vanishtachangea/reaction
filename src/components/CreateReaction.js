import React, {Component} from "react";
import {REACTION_OBJECTS} from "../actions/types";
import {createReaction} from "../actions/reactions";
import {PubSubContext} from "../pubsub";
import {connect} from "react-redux";

class CreateReaction extends Component {
  publishReaction = ({type, emoji}) => () => {
    const {userName, messageId} = this.props;
    this.context.pubsub.publish(createReaction({type, emoji, userName, messageId}));
  };
  render() {
    return (
      <div>
        {REACTION_OBJECTS.map((reaction_object) => {
          const {type, emoji} = reaction_object;
          return (
            <span
              style={{margin: 5, cursor: "pointer"}}
              key={type}
              onClick={this.publishReaction({type, emoji})}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    );
  }
  static contextType = PubSubContext;
}
// export default CreateReaction;
export default connect(({userName}) => ({userName}))(CreateReaction);
