import {FC} from "react";
import { Link } from 'react-router-dom';

import {SearchEntry} from "../state/entities/SearchEntry";
import {structureDetails} from "../state/action-creators";

interface ListStructureEntryProps {
    entry: SearchEntry
}

const ListStructuresEntry: FC<ListStructureEntryProps> = ({ entry }) => {

    const storeEntry = () => {
        structureDetails(entry.id, entry);
    }

    return (
        <div className="box">
            <h4><Link onClick={storeEntry} to={`/structure/${entry.id}`} title={`Visualize details for '${entry.id}'`} >{ entry.id }</Link></h4>
            <span>Title: {entry.attributes.titles[0].title}</span>
        </div>
    )
}

export default ListStructuresEntry