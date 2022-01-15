import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import login from '../assents/login.png';
import { makeStyles } from '@material-ui/styles';
import { useState, useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import {
  getDatabase,
  push,
  set,
  query,
  remove,
  child,
  update,
  ref,
} from 'firebase/database';

const useStyles = makeStyles((theme) => ({
  googleImg: {
    width: '75px',
    marginLeft: 10,
  },
  image: {
    borderRadius: '50%',
    backgroundColor: '#046582',
    marginTop: '-5rem',
    marginBottom: '1rem',
  },
  submitbtn: {
    backgroundColor: '#046582',
  },
  formContainer: {
    padding: '3rem ',
  },
}));

const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, 'blog');
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: info.title,
    imageUrl: info.imageUrl,
    content: info.content,
  });
  console.log('veri eklendi');
};

export default function NewBlog() {
  const { info } = useContext(BlogContext);

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addInfo(info);
  };

  const handleInputChange= () => {
    
  }

  return (
    <div className={classes.container}>
      <Container
        className={classes.formContainer}
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
            ──NEW BLOG──
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image URL"
              id="image"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              name="content"
              label="content"
              id="content"
              rows={15}
              onChange={handleInputChange}
            />

            <Button
              onClick={handleSubmit}
              className={classes.submitbtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
