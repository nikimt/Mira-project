import React, { Component } from 'react';
import ProductList   from '../containers/ProductList';
import Background from './background.js';

class App extends Component {

    render() {
        return (
        	<div className="total">
        		<Background />
            <div>
                <ProductList />
            </div>
          </div>
        );
  }
}


export default App;