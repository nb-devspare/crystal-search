import {FC} from "react";
import {SearchMeta} from "../state/entities/SearchMeta";

interface SearchSummaryProps {
    query: string;
    pageResults: number | undefined;
    meta?: SearchMeta | null;
}

const SearchSummary: FC<SearchSummaryProps> = ({ query, pageResults, meta }) => {
    const hasQuery = () => {
        // TODO investigate why we are getting string 'undefined' instead of undefined
        return query !== null && query !== "undefined" && query.length > 0;
    }

    return (
        <div className="block">
            <div className="title is-4">
                {!hasQuery() && <div>All Crystal Structures available</div> }
                {hasQuery() && <span>Search results for query <span className="title is-4 tag is-info is-light">{query}</span></span>}
            </div>
            { meta && meta?.total > 0 &&
                <span className="title is-6">Showing {pageResults} of {meta?.total} available results</span>
            }
        </div>
    )
}

export default SearchSummary;