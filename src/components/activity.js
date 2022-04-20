import React from "react";

import { connect } from "react-redux";
import "./activity.css";

class RandomList extends React.Component {
  render() {
    const { activity } = this.props;
    return <div>{activity}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(RandomList);
