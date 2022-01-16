import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ekLogo from '../assents/ekLogo.jpg';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../contexts/AuthContext';
import { useContext, useState } from 'react';
import { auth } from '../helpers/firebase';
import { signOut } from 'firebase/auth';
import { successNote } from '../helpers/ToastNotify';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#046582',
    position: 'static',
  },
  title: {
    fontFamily: 'Girassol',
    textAlign: 'center',
    cursor: 'pointer',
  },
  logo: {
    width: '40px',
    cursor: 'pointer',
    borderRadius: '50%',
  },
}));

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
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
          <a
            href="https://github.com/emrekesimemre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              onClick={() => navigate('./')}
              className={classes.logo}
              src={ekLogo}
              alt="logo"
            />
          </a>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className={classes.title} onClick={() => navigate('./')}>
              {' '}
              ──── <span>{'<EKesim/>'}</span> Blog ────
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
            <AccountCircle style={{ fontSize: '40px' }} />
          </IconButton>
          {currentUser?.email ? (
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
