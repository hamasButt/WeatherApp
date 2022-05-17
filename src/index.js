import React from 'react';
import ReactDOM from 'react-dom'
import './styles/index.css';
import App from './App';
import {AppState} from "./services/context/app-state";

ReactDOM.render(
    <AppState>
        <App/>
    </AppState>, document.getElementById('root')
)
;
