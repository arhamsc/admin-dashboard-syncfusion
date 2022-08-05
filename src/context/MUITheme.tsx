import { createTheme } from '@mui/material/styles';

// //Below code is to extend the interface with custom values in typescript
// import '@mui/material/styles/createPalette';
// declare module '@mui/material/styles/createPalette' {
//     interface PaletteOptions {
//         tertiary: {
//             main: String;
//         };
//         quaternary: {
//             main: String;
//             light: String;
//         };
//     }
// }

const theme = createTheme({
    palette: {
        primary: {
            main: '#FDFFFC',
        },
        secondary: {
            main: '#F1D302',
        },
        tertiary: {
            main: '#ED1C24',
        },
        quaternary: {
            main: '#235789',
            light: '#1f4d78a5',
        },
    },
});

//Below approach is to use the theme palette inside of the component.
theme.components = {
    ...theme.components,
    MuiButton: {
        styleOverrides: {
            contained: {
                color: theme.palette.primary.main,
            },
        },
    },
};

export default theme;
