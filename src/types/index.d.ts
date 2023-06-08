//Below code is to extend the interface with custom values in typescript
import '@mui/material/styles/createPalette';
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

declare module '@mui/material/styles' {
    interface CustomPalette {
        tertiary: PaletteColorOptions;
        quaternary: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: PaletteColorOptions;
        quaternary: PaletteColorOptions;
    }
}
