const { createSlice } = require('@reduxjs/toolkit');
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
	noOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: state => {
			state.noOfIceCreams--;
		},
		restocked: (state, action) => {
			state.noOfIceCreams += action.payload;
		},
	},
	// extraReducers: {
	// 	['cake/ordered']: state => {
	// 		state.noOfIceCreams--;
	// 	},
	// },
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, state => {
			state.noOfIceCreams--;
		});
	},
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
