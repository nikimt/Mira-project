export default (state = [], action) => {
    const { type, product } = action;

    switch (type) {
        case 'PRODUCT_LIKED': return state.concat(product);
        default: return state;
    }
};