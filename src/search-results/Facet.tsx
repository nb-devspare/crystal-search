import {FC} from "react";

import {SearchFacet} from "../state/entities/SearchFacet";

interface FacetProps {
    facetName: string;
    facetValues: SearchFacet[] | undefined;
}

const Facet: FC<FacetProps> = ({ facetName, facetValues }) => {
    return (
      <div className="mb-5">
          <h5>{facetName}</h5>
          <ul>
              {facetValues?.map((f) => (<li key={f.id}>{f.title}&nbsp;({f.count})</li>))}
          </ul>
      </div>
    );
};

export default Facet