export const addFeedbackID = (currentFeedback, currentFeedbackToAdd) => {
    return [...currentFeedback, { ...currentFeedbackToAdd, id: currentFeedback.length+1 }];
   };
   