import React, {Component} from 'react';
import {render} from 'react-dom';
import Swipe from 'react-swipe-component';
import { connect } from "react-redux";

class SwipeCard extends Component{
    constructor(){
        super();
        this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
        this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
        this.onSwipeDownListener = this._onSwipeUpListener.bind(this);
        this.onSwipeUpListener = this._onSwipeDownListener.bind(this);
        this.onSwipeListener = this._onSwipeListener.bind(this);
    }
    render() {
        return (<Swipe
                nodeName="div"
                className="test"
                mouseSwipe={false}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener}
                onSwipedDown={this.onSwipeDownListener}
                onSwipedUp={this.onSwipeUpListener}
                onSwipe={this.onSwipeListener}>
            Demo
        </Swipe>);
    }
    _onSwipeLeftListener(){
        console.log("Swiped left");
    }
    _onSwipeRightListener(){
        console.log("Swiped right");
    }
    _onSwipeUpListener(){
        console.log("Swiped Up");
    }
    _onSwipeDownListener() {
        console.log("Swiped down");
    }
    _onSwipeListener(e){
        if (e[1]===0) console.log("Swipe x: "+e[0]);
        else if (e[0]===0) console.log("Swipe y: "+e[1]);
    }
}

const mapStateToProps = (state) => {
    console.log("STATE----->", state);
    // const { liked, disliked, seenProducts } = state;
    // return {
        // liked,
        // disliked,
        // seenProducts
    // };
};

export default connect(mapStateToProps)(SwipeCard);