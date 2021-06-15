import { combineReducers } from 'redux';

import searchReducers from './search-reducers';

const reducers = combineReducers({
    search: searchReducers,
    // detail: any,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;