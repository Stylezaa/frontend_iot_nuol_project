import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
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
      <Link className="no-underline hover:text-blue-600" color="inherit" href="https://www.facebook.com/thanusin.pouvongkhamchan/">
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
          <Link href="/login" className="bg-blue-500 rounded-sm my-3">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className='bi bi-moisture cursor-pointer w-10 text-white duration-500' viewBox="0 0 583.000000 583.000000">
              <g transform="translate(0.000000,583.000000) scale(0.100000,-0.100000)"
              fill="#fff" stroke="none">
                <path d="M312 5819 c-63 -12 -157 -66 -203 -116 -22 -24 -55 -74 -72 -111
                l-32 -67 0 -2610 0 -2610 32 -67 c44 -93 100 -151 191 -196 l76 -37 2611 0
                2611 0 76 37 c91 45 147 103 191 196 l32 67 0 2611 0 2610 -37 76 c-45 91
                -103 147 -196 191 l-67 32 -2585 1 c-1422 1 -2604 -2 -2628 -7z m5232 -68
                c132 -65 225 -192 246 -336 13 -96 13 -4904 0 -5000 -21 -144 -114 -271 -246
                -336 l-69 -34 -2540 -3 -2539 -2 -63 21 c-124 41 -235 153 -273 276 -20 65
                -20 84 -20 2578 0 2486 0 2514 20 2578 37 121 140 227 263 273 l62 23 2545 -2
                2545 -2 69 -34z"/>
                <path d="M405 5676 c-27 -7 -65 -21 -84 -30 -56 -30 -127 -110 -153 -173 l-23
                -58 0 -2500 0 -2500 23 -58 c27 -65 98 -144 158 -175 22 -11 66 -25 99 -32 44
                -8 711 -10 2530 -8 l2470 3 67 33 c77 38 130 92 167 171 l26 56 0 2510 0 2510
                -33 67 c-38 77 -92 130 -171 167 l-56 26 -2485 2 c-1950 1 -2496 -1 -2535 -11z
                m1171 -162 c104 -77 104 -211 0 -288 -26 -20 -43 -21 -302 -24 l-274 -3 0
                -444 0 -443 113 -4 c106 -3 116 -5 149 -30 79 -61 88 -180 19 -249 -45 -45
                -91 -59 -198 -59 l-83 0 0 -445 0 -445 266 0 c300 0 316 -3 361 -72 54 -80 23
                -202 -60 -241 -30 -15 -74 -17 -301 -17 l-266 0 0 -445 0 -445 83 0 c107 0
                153 -14 198 -59 69 -69 60 -188 -19 -249 -33 -25 -43 -27 -149 -30 l-113 -4 0
                -444 0 -444 260 0 c287 0 306 -3 353 -59 56 -67 56 -155 0 -222 -49 -58 -58
                -59 -452 -59 -229 0 -370 4 -388 11 -42 15 -92 68 -103 109 -14 48 -14 4962 0
                5009 12 41 54 88 95 107 24 11 107 13 407 11 363 -2 378 -3 404 -23z m2577
                -367 c175 -47 361 -147 487 -264 90 -83 106 -125 76 -198 -22 -51 -69 -77
                -132 -72 -46 3 -59 9 -110 56 -183 164 -388 244 -624 244 -226 -1 -423 -72
                -591 -216 -88 -75 -109 -87 -154 -87 -83 0 -141 66 -132 148 4 37 14 53 58 99
                139 141 355 256 569 302 80 18 123 20 275 17 155 -3 194 -7 278 -29z m-68
                -417 c143 -45 324 -161 360 -230 33 -64 11 -156 -45 -185 -61 -31 -139 -15
                -190 40 -88 94 -280 155 -425 134 -123 -17 -198 -53 -323 -154 -35 -28 -52
                -35 -88 -35 -88 0 -134 47 -134 136 0 58 25 93 112 159 99 74 221 130 339 155
                24 5 107 8 184 6 110 -3 155 -8 210 -26z m-65 -358 c65 -26 142 -85 166 -128
                28 -51 15 -120 -31 -162 -35 -32 -41 -34 -95 -30 -47 3 -64 10 -94 36 -68 59
                -158 63 -223 8 -43 -36 -68 -46 -113 -46 -79 0 -130 52 -130 132 0 50 20 84
                75 128 48 39 65 48 130 72 71 26 237 21 315 -10z m-128 -402 c29 -8 59 -35
                140 -128 516 -586 891 -1182 1046 -1662 98 -302 113 -562 50 -835 -180 -780
                -954 -1232 -1687 -986 -452 152 -791 558 -887 1066 -23 122 -24 367 -1 492 86
                466 392 1036 882 1648 197 246 331 393 367 404 44 12 47 12 90 1z"/>
                <path d="M3745 3509 c-214 -258 -399 -515 -545 -756 l-91 -148 371 -3 c203 -1
              536 -1 739 0 l370 3 -63 105 c-138 233 -357 540 -562 787 -60 73 -111 132
              -114 133 -3 0 -50 -54 -105 -121z"/>
              </g>
            </svg>
          </Link>
          <Typography className="font-semibold" component="h1" variant="h5">
            AQUATIC INDEX
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
              label="ອີເມວ"
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
              label="ລະຫັດຜ່ານ"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              className="bg-blue-600 hover:bg-blue-700 w-full px-5 py-2 rounded text-white font-semibold"
              sx={{ mt: 3, mb: 2 }}
            >
              ເຂົ້າສູ່ລະບົບ
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
        <div className="text-center">
          <Link className="ease-out duration-300 hover:text-blue-700 font-semibold underline"color="inherit" href="/">
            ກັບໄປໜ້າຫຼັກ
          </Link>
        </div>
      </Container>
    </ThemeProvider>
  );
}