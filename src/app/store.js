const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');
const userReducer = require('../features/users/userSlice');

const logger = createLogger();

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: iceCreamReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

module.exports = store;
