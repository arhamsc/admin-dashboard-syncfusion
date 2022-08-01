//Below code is to extend the interface with custom values in typescript
import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        tertiary: {
            main: String;
        };
        quaternary: {
            main: String;
            light: String;
        };
    }
}
