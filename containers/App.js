import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'

import  Header from './Header/Header';
import  Main  from './Main/Main';

export default class App extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      )
    }
}
