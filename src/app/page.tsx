'use client';
import { Nav } from '@/components/Layout';
import { useState } from 'react';

export default function Home() {
	const [ load, setLoad ] = useState('false');
  
	return (
		<>
			<Nav />
			<h3>{load}</h3>
		</>
	);
}