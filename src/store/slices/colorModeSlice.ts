import { createSlice } from "@reduxjs/toolkit";

export interface ColorState {
    value: boolean;
}

const initialState: ColorState = {
    value: false,
};

export const colorModeSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		toggleColor: state => {
			return { ...state, value: !state.value };
		},
	},
});

export const { toggleColor } = colorModeSlice.actions

export default colorModeSlice.reducer;