import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login/login'
import Test from './test/index'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
        <BrowserRouter>
        <div>
          <Route path="/login" component={Login}/>
          <Route path="/test" component={Test}/>
          </div>
        </BrowserRouter>
      ), document.getElementById('root'));

serviceWorker.unregister();
