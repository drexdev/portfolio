'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const DotMouse = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-primary);
  box-shadow: 0 0 15px 0 var(--color-primary);

  z-index: -1000;
`;

export default function Dot() {
	const [position, setPosition] = useState({ x: -50, y: -50 });

	useEffect(() => {
		const handleMouseMove = (event : MouseEvent) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<DotMouse style={{ left: position.x, top: position.y }} />
	);
}