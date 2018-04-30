import { combineReducers } from 'redux';
import {reducer as fetchReducer} from 'react-redux-fetch';

// reducers
import count from './productsReducer';
import seenProducts from './activeProductReducer';
import liked from './likedReducer';
import disliked from './dislikedReducer';

export default combineReducers({
    count,
    liked,
    disliked,
    seenProducts,
    repository: fetchReducer
});