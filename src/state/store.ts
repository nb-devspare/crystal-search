import {applyMiddleware, createStore} from "redux";

import reducers from './reducers'
import thunk from "redux-thunk";
import {persitMiddleware} from "./middlewares/persit-middleware";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(persitMiddleware, thunk)
);
