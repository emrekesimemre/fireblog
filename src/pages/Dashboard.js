import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import js from '../assents/javascript.png';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Dashboard() {
  return (
    <div>
      <Typography
        mt={9}
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        ──── Dashboard ────
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="194" image={js} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h2>JavaScript</h2>
            <p>September 14, 2016</p>
            May 18, 2021 JavaScript, often abbreviated as JS, is a programming
            language that conforms to the ECMAScript specification. JavaScript
            is high-level, often just-in-time compiled, and multi-paradigm. It
            has curly-bracket syntax, dynamic typing, prototype-based
            object-orientation, and first-class functions.
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              E
            </Avatar>
          }
          title="emrekesim34@gmail.com"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
