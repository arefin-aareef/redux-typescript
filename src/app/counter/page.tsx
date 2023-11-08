'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Button,
	Flex,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { RootState } from '../../store/store';
import { decrement, increment } from '../../store/slices/counterSlice';
import { toggleColor } from '@/src/store/slices/colorModeSlice';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const page = () => {
		const { toggleColorMode } = useColorMode();

	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
		const isDarkMode = useSelector((state: RootState) => state.color.value);


	const bgColor = useColorModeValue('blue.200', 'blue.800');

	return (
		<Flex alignItems='center' justifyContent='center' w='full' direction='column' gap='20px'>
			<Button
				onClick={() => {
					toggleColorMode();
					dispatch(toggleColor());
				}}
			>
				{isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill /> }
			</Button>
			<Flex
				h='500px'
				w='500px'
				direction='column'
				border='2px solid blue'
				p='16px'
				borderRadius='8px'
				gap='8px'
				bgColor={bgColor}
			>
				<Button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</Button>
				<Text align='center'>{count}</Text>
				<Button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</Button>
			</Flex>
		</Flex>
	);
}

export default page;
