// JavaScript source code
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import RepositoryTable from './RepositoryTable'
import TagsTable from './TagsTable'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import 'typeface-roboto';

class MainView extends Component {

    constructor(props) {
        super(props);
        this.tagTable = React.createRef();
	}

    lendBook = (event) => {
        this.tagTable.current.lendBook(event)
    }
	
	returnBook = (event) => {
        this.tagTable.current.returnBook(event)
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
                    <TagsTable ref={this.tagTable} onClick={this.clickTag} />
                </Grid>
                </Grid>
        </div>
        );
    }
}

export default MainView;
