import {FC, useEffect } from "react";
import { useHistory, RouteComponentProps } from 'react-router-dom';

import './StructureDetails.css';
import {SearchEntry} from "../state/entities/SearchEntry";
import {useActions} from "../hooks/use-actions";
import {useTypedSelector} from "../hooks/use-typed-selector";

interface StructureDetailsProps {
    id: string
}

const StructureDetails: FC<RouteComponentProps<StructureDetailsProps>> = (props) => {
    const entry = useTypedSelector((s) => {
        if (s && s.search && s.search.data) {
            return s.search.data.structure;
        }
        return null;
    }) as SearchEntry;

    const loading = useTypedSelector((s) => s.search?.loading);

    const { structureDetails } = useActions();

    const history = useHistory();

    useEffect(() => {
        // deps is empty, load from URL
        structureDetails( props.match.params.id, null);
    }, [props.match.params.id, structureDetails])

    const renderSubjects = entry && entry.attributes && entry.attributes.subjects &&
        entry.attributes.subjects.map((s) => (
            <li>{s.subject}</li>
        ));

    return (
        <div className="container content is-centered">
            <button className="button is-light is-5 mb-5" onClick={() => history.go(-1)} title="Return to search results">
                <span className="icon"><i className="fas fa-arrow-left"></i></span>
                <span className="">list results</span>
            </button>
            <div className="columns">
                { loading && <progress className="progress is-small is-primary" max="100">15%</progress> }
                { entry && entry.attributes &&
                    <div className="column is-four-fifths box">
                        <h3 className="entry-link">
                            <a href={entry.attributes.url} title={`View '${entry.id}' in CCDC website`}>
                            {entry.id}
                            <span className="icon is-small"><i className="fas fa-link"></i></span>
                            </a>
                        </h3>
                        <div className="overview">
                            <div className="overview-header">Title</div>
                            <div className="overview-content">{entry.attributes.titles[0].title}</div>

                            <div className="overview-header">Description</div>
                            <div className="overview-content">{entry.attributes.descriptions[0].description}</div>

                            <div className="overview-header">Source</div>
                            <div className="overview-content">{entry.attributes.source}</div>

                            <div className="overview-header">Publication Year</div>
                            <div className="overview-content">{entry.attributes.publicationYear}</div>

                            <div className="overview-header">Publisher</div>
                            <div className="overview-content">{entry.attributes.publisher}</div>
                        </div>
                        <section className="section">
                            <h5>Subjects</h5>
                            <ul>
                            {renderSubjects}
                            </ul>
                        </section>
                    </div>
                }
            </div>
        </div>
    )
};

export default StructureDetails;