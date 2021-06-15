import React from "react";
import { useLocation } from 'react-router-dom';

import SearchBox from "./SearchBox";



function Header() {
    const location = useLocation();

    return (
        <header className="has-background-info-light box mb-6">
            <div className="columns is-centered">
                <div className="column is-four-fifths">
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Crystal Search
                            </p>
                            <p className="subtitle">
                                Explore Crystal Structure resources
                            </p>
                        </div>
                    </section>
                        <section className={location.pathname === "/" ? "is-invisible" : ""}>
                            <SearchBox/>
                        </section>
                </div>
            </div>
        </header>

    );
};

export default Header;
