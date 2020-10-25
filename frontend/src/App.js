import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Home from './components/outerPage/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import Paperbase from './components/innerComponent/Paperbase'

import {Provider} from 'react-redux'; 
import store from './store'; 


const App = () => (
    <>
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <Route  path='/login' component={Login}/> 
                    <Route  path='/signup' component={Signup}/> 
                    <Route  path='/reset_password' component={ResetPassword}/> 
                    <Route  path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm}/> 
                    <Route  path='/activate/:uid/:token' component={Activate}/> 
                 
                </Switch>
            </Layout>
                 
        </Router>
        <Router>
            <Switch>
                <Route  path='/elami' component={Paperbase}/>
            </Switch>
        </Router>
    </Provider>
    </>
    
)

export default App
