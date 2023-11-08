import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import colorModeReducer from './slices/colorModeSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		color: colorModeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
