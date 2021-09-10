import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button'
import ReactJson from 'react-json-view'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {CastByteToNumber} from '../helpers.js'

const styles = theme => ({
  card: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class ManifestCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            error: null,
            isLoaded: true,
            tag: null,
            manifest: null,
            expanded: false,
            cardHeader: "bookname",
            size: "author",
            date: "dd/mm/yyyy",
            anchorEl: null,
            notificationOpen: false
        };
    }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openNotification = () => {
    this.setState({ notificationOpen: true });
  }

  closeNotification = () => {
    this.setState({ notificationOpen: false });
  }

  setManifest(tag) {

    this.setState(() => ({
      isLoaded: false,
      manifest: null,
      cardHeader: tag
    }));

    var encodedRepo = encodeURIComponent(tag.repo)
    var encodedTag = encodeURIComponent(tag.tag)
    fetch(`/api/manifest/${encodedRepo}/${encodedTag}`)
      .then(res => res.json())
      .then((result) => {

          if(typeof result !== 'object') {
            result = JSON.parse(result)
          }

          this.setState(() => ({
              manifest: result,
              isLoaded: true
          }));
      },
      (error) => {
          this.setState({
          isLoaded: true,
          error
      });
      }
    )

    this.setState(() => ({
        cardHeader: tag.bookname,
        size: tag.bookauteur,
        date: tag.bookpublication,
        book: tag
    }));

   }

  lendBook = () => {
    console.log(this.state.book);
    this.props.lendBookTrigger(this.state.book);
    var book = this.state.book.bookname;
    var name = this.state.book.bookauteur;
    var email = localStorage.getItem("email");
    axios.post("http://isen-library.3r1.co:8001/saveLend", {
      book,
      name,
      email
    }).then(result => {
      console.log(result);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
        <div>   
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.cardHeader.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          title={this.state.cardHeader}
          subheader={this.state.size} >
        </CardHeader>
        <Typography variant="body2" component="p">
            {this.state.date}
          </Typography>
        <CardContent>
        <Typography paragraph>
        {!this.state.isLoaded && (
          <Grid container justify = "center">
            <CircularProgress />
          </Grid>
        )}
        { this.state.manifest != null ? <ReactJson src={this.state.manifest} /> : null }
        </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        </Collapse>
        <Grid container justify ="flex-end">
            <Button variant="contained" color="primary" onClick={this.lendBook}>
                Lend
            </Button>
        </Grid>
      </Card>
      </div>
    );
  }
}

ManifestCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManifestCard);