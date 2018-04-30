export default function likeProduct (product) {
	return {
		type: 'PRODUCT_LIKED',
		product: product
	};
}