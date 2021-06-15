import {FC} from "react";

import SearchBox from "../shared/SearchBox";

const Home: FC = () => {
    return (
        <div className="container content is-centered">
            <section className="mb-6">
                <h2>About</h2>
                <p>Crystal Search is a prototype search application for Crystal Structures published on DataCite.</p>
                <p>Use the search box below to filter available structures or submit an empty query to explore all the structures</p>
            </section>
            <section className="">
                <SearchBox />
            </section>
        </div>
    );
}

export default Home;