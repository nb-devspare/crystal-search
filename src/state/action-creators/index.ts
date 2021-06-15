import {Dispatch} from "redux";
import axios from "axios";

import {Action} from "../actions";
import {ActionTypes} from "../action-types";
import {SearchResults} from "../entities/SearchResults";
import {SearchEntry} from "../entities/SearchEntry";

const DATA_CITE_ENDPOINT = "https://api.test.datacite.org/dois";

export const searchStructures = (query: string) => {
    const BASE_CCDC_QUERY = '?query=prefix:10.5517';
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.SEARCH_STRUCTURES, payload: { query: '' } });

        try {
            let finalQuery = query
                ? `${BASE_CCDC_QUERY} ${query}`
                : BASE_CCDC_QUERY;

            const { data }: { data: SearchResults} = await axios.get(`${DATA_CITE_ENDPOINT}${finalQuery}`);
            // console.log(`searchStructures-reducer: ${JSON.stringify(data)}`);
            if (data) {
                dispatch({
                   type: ActionTypes.SEARCH_STRUCTURES_SUCCESS,
                   payload: data as SearchResults
                });
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export const structureDetails = (id: string, structure: SearchEntry | null) => {

    return async (dispatch: Dispatch<Action>) => {
        if (structure) {
            dispatch({
               type: ActionTypes.STRUCTURE_DETAIL_SUCCESS,
               payload: structure
            });
        } else {
            dispatch({
               type: ActionTypes.STRUCTURE_DETAIL,
               payload: {
                   id: id,
                   structure: null
               }
            });
            try {
                // https://api.test.datacite.org/dois/10.5517/ccdc.csd.cc1ssm17
                const res = await axios.get(`${DATA_CITE_ENDPOINT}/${id}`);
                const entry = res.data.data as SearchEntry;
                if (entry) {
                    dispatch({
                        type: ActionTypes.STRUCTURE_DETAIL_SUCCESS,
                        payload: entry as SearchEntry
                    });
                }
            } catch (err) {

                console.error(err);
            }
        }
    }
};