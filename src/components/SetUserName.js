import React from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/username";
const SetUserName = ({setUserName}) => {
  return (
    <div>
      <h3>userName:</h3>
      <input onChange={setUserName} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (event) => dispatch(setUserName(event.target.value)),
  };
};

//export default connect(null, {setUserName})(SetUserName);
export default connect(null, mapDispatchToProps)(SetUserName);
