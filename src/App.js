import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers"


// import store from "./store/index";
// import App from "./components/App";

// import logo from './logo.svg';
import './App.css';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default App;
