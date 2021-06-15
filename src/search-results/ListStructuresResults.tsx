import {FC,
    useEffect
} from "react";

import {useActions} from "../hooks/use-actions";
import {useTypedSelector} from "../hooks/use-typed-selector";
import ListStructuresEntry from "./ListStructureEntry";
import {RouteComponentProps} from "react-router-dom";
import SearchSummary from "./SearchSummary";
import SearchFilters from "./SearchFilters";

interface ListStructuresResultsProps {
    query: string;
}

const ListStructuresResults: FC<RouteComponentProps<ListStructuresResultsProps>> = (props) => {
    const searchResults = useTypedSelector((s) => {
        if (s && s.search && s.search.data) {
            return s.search.data.searchResults;
        }
        return null;
    });
    const loading = useTypedSelector((s) => s.search?.loading);

    const { searchStructures } = useActions();

    useEffect(() => {
        // search without query
        searchStructures('');
    }, [ searchStructures ]);

    useEffect(() => {
        // search with query
        searchStructures(props.match.params.query);
    }, [ searchStructures, props.match.params.query, props.location ])

    const hasResults = () => {
        return searchResults && searchResults.meta && searchResults.meta.total > 0;
    }

    const renderStructures = searchResults?.data?.map((se:any) => (
            <ListStructuresEntry key={se.id} entry={se} />
        )
    );

    return (
      <div className="columns is-centered">
          { !loading &&
              <div className="column is-four-fifths">
                  <SearchSummary query={`${props.match.params.query}`}
                                 pageResults={searchResults && searchResults.meta ? searchResults?.data?.length : 0}
                                 meta={searchResults ? searchResults.meta : null}/>
                  <div className="content columns">
                      <div className="column is-one-fifth">
                          <SearchFilters meta={searchResults?.meta}/>
                      </div>
                      <div className="column">
                          {hasResults() && renderStructures}
                          {!hasResults() &&
                          <div className="notification is-info is-light">
                              <p>No results found</p>
                              <p>Please review the query or filters</p>
                          </div>
                          }
                      </div>
                  </div>
              </div>
          }
          { loading && <progress className="progress is-small is-primary" max="100">15%</progress>}
      </div>
    )
};

export default ListStructuresResults;