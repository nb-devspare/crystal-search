import {SearchFacet} from "./SearchFacet";

export interface SearchMeta {
    total: number;
    totalPages: number;
    page: number;
    resourceTypes: SearchFacet[];
    published: SearchFacet[];
    subjects: SearchFacet[];
}