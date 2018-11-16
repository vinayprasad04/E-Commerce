import React, { Component } from 'react';
import './App.css';

import NewsSource from './components/NewsSource';
import NewsSourceList from './components/NewsSourceList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-body">
          <div className="new-source">
            <NewsSource/>
          </div>
          <div className="new-source-list">
            <NewsSourceList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
