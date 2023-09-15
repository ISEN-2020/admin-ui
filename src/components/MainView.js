// JavaScript source code
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import RepositoryTable from './RepositoryTable'
import TagsTable from './TagsTable'
import ManifestCard from './ManifestCard'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import 'typeface-roboto';

class MainView extends Component {

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

    lendBook = (event) => {
        this.tagTable.current.lendBook(event)
    }

    render() {
        return(
        <div>
            <NavBar />
            <Grid container spacing={24} style={{padding: 24, margin: 0, width: '100%'}}>
                <Grid item xs={4}>
                    <RepositoryTable onClick={this.clickRepository} />
                </Grid>
                <Grid item xs={4}>
                     <ManifestCard lendBookTrigger={this.lendBook} innerRef={this.manifestCard} />
                </Grid>
                <Grid item xs={4}>
                    <TagsTable ref={this.tagTable} onClick={this.clickTag} />
                </Grid>
                </Grid>

        </div>
        );
    }
}

export default MainView;
