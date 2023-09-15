import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import { toast } from 'react-toastify'; // Import react-toastify

import { useHistory } from "react-router-dom";
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright � '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory()

  const [password, setPassword] = useState('')

  const routeChange = () => { 
    // Check if the email and password match the criteria
    if (password === "powner") {
      let path = `/composant_1`; 
      history.push(path);
      console.log(password);
      history.push(path);
    } else {
      // Handle incorrect credentials here, e.g., show an error message
      console.log("Incorrect credentials");
      //toast.error('Incorrect credentials. Please try again.');
    }
  }
  
  const routeChange2 = () =>{ 
    let path = `/composant_2`;
    history.push(path);
    //send information
    /*
    axios.post("https://www.somePlace.com/auth/login", {
      this.refs.emailID.getValue(),
      this.refs.passwordID.getValue()
    })}
    */
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        {/* Icone du cadenas */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        

        {/* Texte "sign up" */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
          {/* Creation d'une grille */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={event => setEmail(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={routeChange}
              >
                Sign Up
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography component="h1" variant="h5" align="center">
                Or
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={routeChange2}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}