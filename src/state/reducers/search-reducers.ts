import { produce } from 'immer';

import {Action, SearchStructuresAction} from "../actions";
import {ActionTypes} from "../action-types";
import {SearchResults} from "../entities/SearchResults";
import {SearchEntry} from "../entities/SearchEntry";

interface SearchState {
    loading: boolean;
    error: string | null;
    query: string;
    data: {
        searchResults?: SearchResults | null,
        structure?: SearchEntry
    }
}

const initialState: SearchState = {
    loading: false,
    error: null,
    query: '',
    data: {}
}

const reducer = produce((state: SearchState = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_STRUCTURES:
            state.error = null;
            state.loading = true;
            state.query = (action as SearchStructuresAction).payload.query;
            return state;

        case ActionTypes.SEARCH_STRUCTURES_SUCCESS:
            state.loading = false;
            state.error = null;
            state.data = {
                searchResults: action.payload
            };
            return state;

        case ActionTypes.STRUCTURE_DETAIL:
            state.error = null;
            state.loading = true;
            state.data.searchResults = null;
            return state;

        case ActionTypes.STRUCTURE_DETAIL_SUCCESS:
            state.error = null;
            state.loading = false;
            state.data.structure = action.payload;
            return state;

        default:
            return state;
    }
});

export default reducer;