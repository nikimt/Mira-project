export default function incrementProduct (product) {
  return {
    type: 'INCREMENT',
    payload: product
  };
}