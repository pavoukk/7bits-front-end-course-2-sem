import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import BaseLayout from './layouts/baselayout/BaseLayout';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Route exact path='/' component={ToDo}/>
            <Route path='/done' component={Done}/>
        </BaseLayout>
    </BrowserRouter>,
    document.getElementById('root')
);
