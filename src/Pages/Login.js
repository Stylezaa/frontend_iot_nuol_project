import React from 'react';
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
      <Link class="no-underline hover:text-blue-600" color="inherit" href="https://www.facebook.com/thanusin.pouvongkhamchan/">
        Dev by DevSin
      </Link>
    </Typography>
  );
}

const theme = createTheme();

const apiUrl = 'https://ceit-iot-api.herokuapp.com/api/user/login';

const urlProfile = 'https://ceit-iot-api.herokuapp.com/api/user/me';

export default function SignIn() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const resp = await axios.post(apiUrl, {
        email: data.get('email'),
        password: data.get('password'),
      });

      if (resp.status === 200) {
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
      alert(error.response.data.error.message)
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
          <Avatar className="bg-blue-500" sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="font-semibold" component="h1" variant="h5">
            Water MNS
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
              // variant="contained"
              class="bg-blue-600 hover:bg-blue-700 w-full px-5 py-2 rounded text-white font-semibold"
              sx={{ mt: 3, mb: 2 }}
            >
              ເຂົ້າສູ່ລະບົບ
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
        <div class="text-center">
          <Link class="ease-out duration-300 hover:text-blue-700 font-semibold underline"color="inherit" href="/">
            {"<"} ກັບໄປໜ້າຫຼັກ
          </Link>
        </div>
      </Container>
    </ThemeProvider>
  );
}