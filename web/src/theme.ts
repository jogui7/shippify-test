import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#EF404A',
    },
    secondary: {
      main: '#FCF173',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
