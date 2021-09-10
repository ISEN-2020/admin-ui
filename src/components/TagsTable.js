import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {CastByteToNumber} from '../helpers.js'

/* const columns=[
    { title: 'Name', field: 'bookname' },
    { title: 'Autor', field: 'bookauteur'},
    { title: 'Publication Date', field: 'bookpublication'},
    { title: 'Rendering Date', field: 'bookrendering'}
] */

const columns=[
    { title: 'Name', field: 'bookname' },
    { title: 'Autor', field: 'bookauteur'},
    { title: 'Rendering date', field: 'bookpublication'}
]

const options = {
    pageSize: 8
};

class TagsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
        this.onClick = props.onClick
    }

    lendBook(book) {
        console.log(book);
        this.setState({
            isLoaded: true,
            items: [book]
        });
	}

    setRepo(repo) {

        this.setState({
            isLoaded: false,
            items: []
        });

        if (sessionStorage.getItem(repo)) {
            console.log(sessionStorage.getItem(repo))
            this.updateTags(JSON.parse(sessionStorage.getItem(repo)))
        } else {
            fetch(`/api/tags/${repo}`)
                .then(res => res.json())
                .then((result) => {
                    this.updateTags(result)
                    try {
                        sessionStorage.setItem(repo, JSON.stringify(result))
                    }catch(e) {}
                },
                (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
        }
    }

    updateTags(tags) {
        this.setState({
            isLoaded: true,
            items: tags.tags
        });
        if(tags.tags.length === 1) {
            this.onClick(null, tags.tags[0])
        }
    }

    render() {
        return (
            <MaterialTable
              title={"Borrowed Books"}
              data={this.state.items}
              columns={columns}
              options={options}
              onRowClick={this.onClick}
              localization={{
                body: {
                    emptyDataSourceMessage: 'No books ordred.',
                },
                }}
            />
        );
    }
  }
  export default TagsTable