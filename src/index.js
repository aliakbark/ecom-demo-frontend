import * as React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

const queryClient = new QueryClient({});

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>,
    document.querySelector('#root')
);
