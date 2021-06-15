import {ActionTypes} from "../action-types";
import {SearchResults} from "../entities/SearchResults";
import {SearchEntry} from "../entities/SearchEntry";

export interface SearchStructuresAction {
    type: ActionTypes.SEARCH_STRUCTURES;
    payload: {
        query: string;
    };
}

export interface SearchStructuresSuccessAction {
    type: ActionTypes.SEARCH_STRUCTURES_SUCCESS;
    payload: SearchResults;
}

export interface StructureDetailAction {
    type: ActionTypes.STRUCTURE_DETAIL;
    payload: {
        id: string;
        structure: SearchEntry | null;
    };
}

export interface StructureDetailSuccessAction {
    type: ActionTypes.STRUCTURE_DETAIL_SUCCESS;
    payload: SearchEntry;
}

export type Action =
  SearchStructuresAction
  | SearchStructuresSuccessAction
  | StructureDetailAction
  | StructureDetailSuccessAction
;