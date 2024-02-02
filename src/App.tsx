import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './style/mainThem';
import { router } from './pages/routes';
import './style/global.css';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
