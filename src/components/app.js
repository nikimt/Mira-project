import React, { Component } from 'react';
import ProductList   from '../containers/ProductList';
import ProductDetail from '../containers/ProductDetail';
import Background from './background.js';
import { Container } from 'semantic-ui-react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
// import SwipeCard from '../containers/SwipeCard';

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


export default DragDropContext(HTML5Backend)(App);