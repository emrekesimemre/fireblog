import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import cw from '../assents/cw.jpeg';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../contexts/AuthContext';
import { useContext, useState } from 'react';
import { auth } from '../helpers/firebase';
import { signOut } from 'firebase/auth';
import { successNote } from '../helpers/ToastNotify';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#046582',
    position: 'static',
  },
}));

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOutFunc = () => {
    signOut(auth);
    navigate('/login');
    successNote('logged out successfully ');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className={classes.container}>
          <img
            onClick={() => navigate('./')}
            style={{ width: '40px', cursor: 'pointer' }}
            src={cw}
            alt=""
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div
              onClick={() => navigate('./')}
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              {' '}
              ──── <span>{'<Fire/>'}</span> Blog ────
            </div>
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {currentUser ? (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/new-blog')}>New</MenuItem>
              <MenuItem onClick={() => signOutFunc()}>Logout</MenuItem>
            </Menu>
          ) : (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
              <MenuItem onClick={() => navigate('/register')}>
                Register
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
