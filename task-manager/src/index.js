import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import BaseLayout from './layouts/baselayout/BaseLayout';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
            <Route exact path='/' component={ToDo}/>
            <Route path='/done' component={Done}/>
        </BaseLayout>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
        );
