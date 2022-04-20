import React from "react";

import { connect } from "react-redux";

class RandomList extends React.Component {
  render() {
    const { activity } = this.props;
    return <div>{activity}</div>;
  }
}

export default connect(null, {})(RandomList);
