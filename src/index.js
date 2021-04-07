import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import "./index.css";
import PubSub, {PubSubContext} from "./pubsub";
import {newMessage} from "./actions/messages";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("stor.getstate", store.getState());

store.subscribe(() => console.log("store.getState", store.getState()));

const pubsub = new PubSub();
pubsub.addListener({
  message: (messageObject) => {
    const {message, channel} = messageObject;
    console.log("received message", message, "channel", channel);
    store.dispatch(message);
  },
});

setTimeout(() => {
  console.log("publish message");
  pubsub.publish(newMessage({text: "Test Message", userName: "userA"}));
}, 1000);
ReactDOM.render(
  <Provider store={store}>
    <PubSubContext.Provider value={{pubsub}}>
      <App />
    </PubSubContext.Provider>
  </Provider>,
  document.getElementById("root")
);
