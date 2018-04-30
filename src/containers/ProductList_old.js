import React from "react";
import { connect } from "react-redux";
import { fetchPostsWithRedux } from "../actions/productActions";

class ProductList extends React.Component {
  componentWillMount() {
    console.log("MOUNTED");
    // this.props.dispatch(fetchPostsWithRedux());
    console.log(this.props);
    console.log(this);
  }

  render() {
    const { error, loading, products } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log("HELLOOOOO")
    console.log(this.props);
    return (
      <ul>
      hi
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  loading: state.products,
  error: state.products
});

export default connect(mapStateToProps, {fetchPostsWithRedux})(ProductList);