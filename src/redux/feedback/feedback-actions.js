import { feedbackActionTypes } from './feedback-types';

export const addFeedback = (message,phone,name,email,service,beverages,restaurantClean,diningExperience) => ({
  type: feedbackActionTypes.ADD_FEEDBACK,
  payload: {
    message:message,
    phone:phone,
    name:name,
    email:email,
    service:service,
    beverages:beverages,
    restaurantClean:restaurantClean,
    diningExperience:diningExperience
  }
});
