'use client';

import Image from 'next/image';
import { LogoContainer, NavContainer } from './nav.styled';

import Logo from '@/public/logo.svg';
import { ButtonPrimary } from '@/components/UI/Buttons/button.styled';

type NavProps = object;

export const Nav: React.FC<NavProps> = () => {
	return (
		<NavContainer>
			<LogoContainer href='/'>
				<Image src={Logo} alt='dd' />
				<span>drexdev.</span>
			</LogoContainer>

			<div className='buttons'>
				<ButtonPrimary href='/'>Ver CV</ButtonPrimary>
			</div>
		</NavContainer>
	);
};