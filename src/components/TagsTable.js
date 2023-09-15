import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {CastByteToNumber} from '../helpers.js'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const columns=[
    { title: 'Name', field: 'name' },
    { title: 'Author', field: 'author'},
    { title: 'Publish date', field: 'publishDate'}
]

const options = {
    pageSize: 5
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
        this.setState({
            isLoaded: true,
            items: this.state.items.concat([book])
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