import PubNub from "pubnub";
import pubnubConfig from "./pubnub.config.json";
import {createContext} from "react";

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubnubConfig);
    this.pubnub.subscribe({channels: [MESSAGE_CHANNEL]});
  }
  addListener = (listenerConfig) => {
    this.pubnub.addListener(listenerConfig);
  };
  publish = (message) => {
    console.log("publish message", message);
    this.pubnub.publish({
      message: message,
      channel: MESSAGE_CHANNEL,
    });
  };
}

// export const PubSubContext = new createContext({
//   pubSub: new PubSub(),
// });
export const PubSubContext = new createContext();
export default PubSub;

// pubnub.addListener({
//   message: (messageObject) => {
//     console.log("messageObject", messageObject);
//   },
// });
// setTimeout(() => {
//   pubnub.publish({
//     message: "foo",
//     channel: MESSAGE_CHANNEL,
//   });
// }, 1000);
