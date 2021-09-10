import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import classnames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


import { useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
   const routeChange2 = () =>{ 
    let path = `/composant_2`; 
    history.push(path);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
        <div>
            <AppBar position="static">
                <Grid container spacing={24} style={{padding: 10, margin: 0, width: '100%'}}>
                    <Grid item xs={9}>
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                            Lending Service
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={2}>
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                exemple@email.com
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={1}>
                        <Fab > 
                            <Avatar onClick={handleClick}/>
                        </Fab>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                        <MenuItem onClick={routeChange2}>Delete account</MenuItem>
                        <MenuItem onClick={routeChange}>Log out</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    )
}

export default NavBar;