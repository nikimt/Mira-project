import { combineReducers } from 'redux';
import {reducer as fetchReducer} from 'react-redux-fetch';

// reducers
import seenProducts from './activeProductReducer';
import liked from './likedReducer';
import disliked from './dislikedReducer';

export default combineReducers({
    liked,
    disliked,
    seenProducts,
    repository: fetchReducer
});