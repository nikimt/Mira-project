import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectProductAction from '../actions/selectProductAction';
import likeProduct from '../actions/likeProductAction';
import dislikeProduct from '../actions/dislikeProductAction';
import { Card, Icon, Image, Container, Segment, Button } from 'semantic-ui-react';
import connect from 'react-redux-fetch';
import Swipeable from 'react-swipeable'


class ProductList extends Component {

    static propTypes = {
        dispatchAllProductsGet: PropTypes.func.isRequired,
        allProductsFetch: PropTypes.object
    };

    componentWillMount() {
        this.props.dispatchAllProductsGet();
    }

    onProductLiked(product) {
        const { likeProduct } = this.props;
        const { selectProductAction } = this.props;
        likeProduct(product);
        selectProductAction(product.name);
    }

    onProductDisliked(product) {
        const { selectProductAction } = this.props;
        const { dislikeProduct } = this.props;
        dislikeProduct(product);
        selectProductAction(product.name);
    }

    hideSeen(product) {
        const {selectProductAction } = this.props;
        var visibility;
        var seenProducts = this.props.seenProducts;
        if (seenProducts.indexOf(product.name) < 0) {
            visibility = "cardContainer visibleCard";
        } else {
            visibility = "hiddenCard";
        }
        return visibility;
    }

    render() {
        const {allProductsFetch} = this.props;
 
        if (allProductsFetch.rejected) {
            return <div>Oops... Could not fetch products!</div>
        }
 
        if (allProductsFetch.fulfilled) {
            return <Card.Group centered>
                <div className='cardContainer'>
                <Card className='productCard' key='no-more-results' raised='true'>
                    <Card.Content>
                        <Card.Header>No more products!</Card.Header>
                        <Card.Meta>Check back later to discover more perfect matches</Card.Meta>
                    </Card.Content>
                </Card>
                </div>
            {allProductsFetch.value.hits.map(product => (
                <Swipeable
                  className={this.hideSeen(product)}
                  trackMouse = "true"
                  onSwipedLeft={this.onProductDisliked.bind(this, product)}
                  onSwipedRight={this.onProductLiked.bind(this, product)}
                >
                    <Card className='productCard' key={`product-${product.productId}`} raised="true">
                        <Image src={product.imageUrl} />
                        <Card.Content>
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Meta>{product.brand}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button id='dislikeButton' animated='fade' onClick={this.onProductDisliked.bind(this, product)}>
                              <Button.Content visible><Icon name='thumbs down' /></Button.Content>
                              <Button.Content hidden>
                                <Icon name='thumbs down' />
                              </Button.Content>
                            </Button>
                            <Button id='likeButton' animated='fade' onClick={this.onProductLiked.bind(this, product)}>
                              <Button.Content visible><Icon name='like' /></Button.Content>
                              <Button.Content hidden>
                                <Icon name='like' />
                              </Button.Content>
                            </Button>
                            </div>
                          </Card.Content>
                    </Card>
                    </Swipeable>
                ))}
            </Card.Group>
        }
 
        return <div>Loading...</div>;
    }
}

const mapStateToProps = (state) => {
    const { liked, disliked, seenProducts } = state;
    return {
        liked,
        disliked,
        seenProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectProductAction, likeProduct, dislikeProduct }, dispatch);
};

export default connect([{
    resource: 'allProducts',
    method: 'get',
    request: {
        url: 'https://dy9team43h.execute-api.us-west-2.amazonaws.com/dev/products?subcategory=eyeshadow'
    }
}], mapStateToProps, mapDispatchToProps)(ProductList);