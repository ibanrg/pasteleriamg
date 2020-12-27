import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App';

import rootReducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = createStore(rootReducer);



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#239786',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#a9e9bf',
            contrastText: '#ffffff'
        },
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
        </Provider>
        </ThemeProvider>,
    rootElement);

// registerServiceWorker();

