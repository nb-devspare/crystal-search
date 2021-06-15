import {FC} from "react";

import {SearchMeta} from "../state/entities/SearchMeta";
import Facet from "./Facet";
import "./SearchFilters.css"

interface SearchFiltersProps {
    meta: SearchMeta | undefined;
}


const SearchFilters: FC<SearchFiltersProps> = ({ meta }) => {
    return (
        <div className="search-filters">
            <h4>Filters</h4>
            { meta && meta?.total > 0 &&
                <ul>
                    <li><Facet facetName="Published" facetValues={meta?.published}/></li>
                    <li><Facet facetName="Subjects" facetValues={meta?.subjects}/></li>
                    <li><Facet facetName="Resource type" facetValues={meta?.resourceTypes}/></li>
                </ul>
            }
        </div>
    )
}

export default SearchFilters;