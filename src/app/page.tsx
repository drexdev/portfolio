'use client';

import { Nav } from '@/components/Layout';
import { useState } from 'react';

export default function Home() {
	const [ data, setData ] = useState('teste');

	return (
		<> 
			<Nav />
			<h1>${data}</h1>
		</>
	);
}