'use client';
import { useSelector, useDispatch } from 'react-redux';

import {
	Button,
	Flex,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { RootState } from '../store/store';
import { toggleColor } from '../store/slices/colorModeSlice';
// import { Counter } from './counter/page';

const page = () => {
	const { toggleColorMode } = useColorMode();

	const bg = useColorModeValue('white.200', 'blue.200');

	const isDarkMode = useSelector((state: RootState) => state.color.value);
	const dispatch = useDispatch();

	return (
		<Flex minH='100vh' bg={bg}>
			<Button
				onClick={() => {
					toggleColorMode();
					dispatch(toggleColor());
				}}
			>
				{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
			</Button>
		</Flex>
	);
};

export default page;
