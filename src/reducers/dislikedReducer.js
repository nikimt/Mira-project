export default (state = [], action) => {
    const { type, product } = action;

    switch (type) {
        case 'PRODUCT_DISLIKED': return state.concat(product);
        default: return state;
    }
};