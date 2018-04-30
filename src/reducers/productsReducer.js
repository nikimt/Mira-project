export default (state = 0, action) => {
	const { type, payload } = action;

		switch (type) {
			case "INCREMENT": return state++;
			default: return state;
		}
};