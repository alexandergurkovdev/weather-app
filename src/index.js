import React from "react";
import ReactDOM from "react-dom";
import GeoLocation from "./components/GeoLocation";
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/global';


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GeoLocation />
        <GlobalStyles />
    </ThemeProvider>,
    document.getElementById(`root`)
);
