export default function dislikeProduct (product) {
	return {
		type: 'PRODUCT_DISLIKED',
		product: product
	};
}