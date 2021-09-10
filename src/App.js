import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar';
import RepositoryTable from './components/RepositoryTable';
import TagsTable from './components/TagsTable';
import ManifestCard from './components/ManifestCard';
import SignUp from './components/SignUp';
import Register from './components/Register';
import MainView from './components/MainView.js';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import 'typeface-roboto';

class App extends Component {

    constructor(props) {
        super(props);
        this.tagTable = React.createRef();
        this.manifestCard = React.createRef();
    }

    clickRepository = (event, rowData) => {
        this.manifestCard.current.setManifest(rowData)
    }

    clickTag = (event, rowData) => {
        this.manifestCard.current.setManifest(rowData)
    }

    render() {
        return(
            <Router>
                <div>
                <Route exact path="/" component={SignUp} />
                <Route path="/composant_1" component={MainView} />
                <Route path="/composant_2" component={Register} />
                </div>
            </Router>
        );
    }
}

export default App;
