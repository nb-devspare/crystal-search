import {FC, FormEvent, useState} from "react";
import { useHistory } from 'react-router-dom';


const SearchBox: FC = (props) => {
    const [ query, setQuery] = useState('');

    let history = useHistory();

    const submitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/search/${query}`)
    };

    return (
        <div className="searchbox-container">
            <form name="searchbox-form" onSubmit={submitSearch} className="is-centered">
                <fieldset className="is-flex is-align-self-center">
                    <input className="input is-align-self-flex-start" type="text" placeholder="Query structures" value={query}
                           onChange={(e) => setQuery(e.target.value)} />
                    <button className="button is-primary is-align-self-flex-end" title="Submit the query to search for">
                        <span className="icon" >
                        <i className="fas fa-search"></i>
                        </span>
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default SearchBox;