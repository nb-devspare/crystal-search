import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import {store} from './state';
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import ListStructuresResults from "./search-results/ListStructuresResults";
import StructureDetails from "./search-details/StructureDetails";
import Home from "./home/Home";


function App() {
  useEffect(() => {
    document.title = "Crystal Search"
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
            <Route path="/" exact component={Home} />
            <Route path="/search/:query?" component={ListStructuresResults} />
            <Route path="/structure/:id+" component={StructureDetails} key={document.location.href} />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
