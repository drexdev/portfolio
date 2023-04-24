import Link from 'next/link';
import styled from 'styled-components';

export const NavContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 110px;
    padding: 0 3%;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    user-select: none;

    img { background-color: var(--color-background); }
    
    img:hover ~ span {
        opacity: 1;
        transform: translateX(0);
    }

    span {
        font-weight: 700;
        font-size: 25px;
        letter-spacing: -1px;

        opacity: 0;
        transform: translateX(-50px);
        transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
        z-index: -1;
    }
`;