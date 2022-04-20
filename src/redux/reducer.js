import { NEW_ACTIVITY } from "./actionTypes";

const initialForm = { activity: "" };

export default function activityReducer(state = initialForm, action) {
  switch (action.type) {
    case NEW_ACTIVITY: {
      return { ...state, activity: action.payload };
    }
    default: {
      return state;
    }
  }
}
