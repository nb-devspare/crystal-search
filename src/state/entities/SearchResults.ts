import {SearchEntry} from "./SearchEntry";
import {SearchMeta} from "./SearchMeta";

export interface SearchResults {
    data?: SearchEntry[];
    meta?: SearchMeta;
    links?: any;
}