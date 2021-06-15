import {Action} from "../actions";
import {Dispatch} from "redux";
import {RootState} from "../reducers";

export const persitMiddleware = ({ dispatch, getState }: { dispatch: Dispatch<Action>; getState: () => RootState }) => {
    return (next: (action: Action) => void) => {
        return (action: Action) => {
            next(action);
        }
    }
}

