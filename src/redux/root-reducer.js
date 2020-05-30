import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import feedbackReducer from './feedback/feedback-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['feedback']
};

const rootReducer = combineReducers({
    feedback: feedbackReducer

});

export default persistReducer(persistConfig, rootReducer);