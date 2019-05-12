import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store'

import AuthorizationLayout from './layouts/authorizationlayout/AuthorizationLayout';//TODO
import BaseLayout from './layouts/baselayout/BaseLayout';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/signin' render={() => (
                    <AuthorizationLayout>
                        <Route exact path='/signin' component={SignIn}/>
                    </AuthorizationLayout>
                )}/>
                <Route path='/signup' render={() => (
                    <AuthorizationLayout>
                        <Route path='/signup' component={SignUp}/>
                    </AuthorizationLayout>
                )}/>
                <Route path='/' render={() => (
                    <BaseLayout>
                        <Route exact path='/' component={ToDo}/>
                        <Route path='/done' component={Done}/>
                    </BaseLayout>
                )}/>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
