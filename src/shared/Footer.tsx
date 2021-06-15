import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <div className="columns is is-centered">
                <div className="column">
                    <h6>Information</h6>
                    <ul className="is-size-7">
                        <li>Who we are</li>
                        <li>Contact</li>
                        <li><a href="https://datacite.org/">Data Cite</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h6>Search help</h6>
                    <ul className="is-size-7">
                        <li><a href="https://support.datacite.org/docs/api-queries">Query filtering</a></li>
                        <li>Available fields</li>
                        <li>References search</li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
