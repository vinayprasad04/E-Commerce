import React, { Component } from 'react';
import './App.css';

import NewsSource from './components/NewsSource';
import NewsSourceList from './components/NewsSourceList';

import Root from './root';
import Header from './components/common/header';
import Footer from './components/common/footer';


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
            <Root/>
          <Footer/>
        </div>
    );
  }
}

export default App;
