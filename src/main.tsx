import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppContextProvider from './context/AppContext';
import theme from './context/MUITheme';
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';

registerLicense(import.meta.env.VITE_SYNC_FUSION_KEY);
//Test
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
