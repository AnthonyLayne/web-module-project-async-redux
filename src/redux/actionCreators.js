import axios from "axios";

import { NEW_ACTIVITY } from "./actionTypes";

export const fetchNewActivity = () => (dispatch) => {
  axios
    .get("https://www.boredapi.com/api/activity")
    .then((res) => {
      const action = { type: NEW_ACTIVITY, payload: res.data.activity };
      dispatch(action);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//need action creators with API here
