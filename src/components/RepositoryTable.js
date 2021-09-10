import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {CastByteToNumber} from '../helpers.js'
import { Button, Table, TableRow, TableCell, TableContainer, TableHead, TablePagination, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch } from'@material-ui/core'
import {DeleteIcon, FilterList, Cancel, CheckCircleIcon} from '@material-ui/icons';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';

const columns=[
    { title: 'Name', field: 'bookname' },
    { title: 'Autor', field: 'bookauteur'},
    { title: 'Available', field: 'bookavailable', render: rowData => {
        return (rowData.bookavailable) ? <CheckCircleIcon /> : <CancelIcon />
        } 
    }
]


const options = {
    pageSize: 8
};

const items = [
    {bookname: 'toto', bookauteur: 'Maxime K', bookpublication: '19/06/2020', bookavailable: true},
    {bookname: 'toto2', bookauteur: 'Budimir U',bookpublication: '19/06/2020', bookavailable: false}
]


class RepositoryTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.onClick = props.onClick
    }

    componentDidMount() {

        this.setState({
            isLoaded: true,
            items: items
                });
                /*
        fetch("/api/repositories")
            .then(res => res.json())
            .then((result) => {

                this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
            });
            }
        )*/
    }



  render() {
    return (
        <div>
            <MaterialTable
              title={"Book Market"}
              data=fetch('https://api.github.com/users/hacktivist123/repos')
  .then(response => response.json());
              columns={columns}
              options={options}
              onRowClick={this.onClick}
              localization={{
                body: {
                    emptyDataSourceMessage: 'Loading repositories...',
                },
                }}
            />
        </div>
    );
  }

  }
  export default RepositoryTable