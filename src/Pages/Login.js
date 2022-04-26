import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://www.facebook.com/thanusin.pouvongkhamchan/">
        Dev by DevSin
      </Link>{' '} {'@'}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

const apiUrl = 'http://localhost:8000/api/user/login';

const urlProfile = 'http://localhost:8000/api/user/me';

export default function SignIn() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // console.log('Data: ' + data.get('email'));
      // console.log('Data: ' + data.get('password'));
      const resp = await axios.post(apiUrl, {
        email: data.get('email'),
        password: data.get('password'),
      });

      // console.log(resp);

      // //Save token to LocalStorage
      // console.log(resp.status);

      if (resp.status === 200) {
        // alert('Login Success');
        localStorage.setItem('token', JSON.stringify(resp.data));
        history.replace('/dashboard/overview')
        history.go(0);
      }

      const respProfile = await axios.get(urlProfile, {
        headers: {
          Authorization: 'Bearer ' + resp.data.access_token,
        },
      });

      //Save Detail User to LocalStorage
      localStorage.setItem('Profile', JSON.stringify(respProfile.data.user));

      console.log(respProfile.data.user);
    } catch (error) {
      console.log(error.response.data.error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Button
              type="submit"
              // onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
