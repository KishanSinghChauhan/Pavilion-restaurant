import { feedbackActionTypes } from './feedback-types';
import {  addFeedbackID} from './feedback-utils'

const INITIAL_STATE = {
  currentFeedback: []
};

const feedbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case feedbackActionTypes.ADD_FEEDBACK:
      return{
        ...state,
        currentFeedback: addFeedbackID(state.currentFeedback , action.payload)
      };
    default:
      return state;
  }
};

export default feedbackReducer;