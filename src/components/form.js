import React from "react";
import { connect } from "react-redux";
import { fetchNewActivity } from "../redux/actionCreators";

class RandomActivityForm extends React.Component {
  render() {
    const { fetchNewActivity } = this.props;
    return (
      <div>
        <button onClick={fetchNewActivity}>New Activity</button>
      </div>
    );
  }
}

export default connect(null, { fetchNewActivity })(RandomActivityForm);
