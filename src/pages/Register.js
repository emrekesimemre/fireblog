import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import login from '../assents/login.png';
import { makeStyles } from '@material-ui/styles';
import google from '../assents/google.png';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import { auth } from '..//helpers/firebase';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: 'url(https://picsum.photos/1600/900)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '840px',
    paddingTop: '40px',
  },
  googleImg: {
    width: '75px',
    marginLeft: 10,
  },
  image: {
    borderRadius: '100%',
    backgroundColor: '#046582',
    marginTop: '-5rem',
    marginBottom: '1rem',
  },
  googlebtn: {
    backgroundColor: 'white',
    color: 'black',
  },
  loginbtn: {
    backgroundColor: '#046582',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
    marginTop: '5rem',
  },
}));

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    const displayName = email
    e.preventDefault();
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName: displayName})
      navigate("/")
      console.log(auth.currentUser);
    } catch (err) {
      alert(err.message);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container
        className={classes.formContainer}
        style={{ backgroundImage: 'https://picsum.photos/200/300' }}
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <img className={classes.image} src={login} alt="" />
          </div>
          <Typography component="h1" variant="h5">
            ──REGISTER──
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={handleSubmit}
              className={classes.loginbtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER
            </Button>
            <Button
              className={classes.googlebtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              WITH <img className={classes.googleImg} src={google} alt="" />
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
