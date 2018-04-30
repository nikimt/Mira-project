import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {

    renderNoProductSelection() {
        return (
            <p>Select a product</p>
        );
    }

    renderActiveProduct() {
        const { activeProduct } = this.props;
        console.log("ACTIVE PRODUCT----->", activeProduct);
        return (
            <div>
                <h5>Details for:</h5>
                <p>Title: <strong>{activeProduct.title}</strong></p>
                <p>Pages: <strong>{activeProduct.pages}</strong></p>
            </div>
        );
    }

    render() {
        const { activeProduct } = this.props;
        return (
            <div>
                {activeProduct ? this.renderActiveProduct() : this.renderNoProductSelection()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("QWEHRFDLAJSHFJLAHSD");
    console.log(state);
    console.log(state.activeProduct);
    const { activeProduct } = state;
    return {
        activeProduct
    };
};

export default connect(mapStateToProps)(ProductDetail);