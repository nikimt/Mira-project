export default function selectProduct (product) {
	return {
    type: 'PRODUCT_SELECTED',
    product: product
	};
}