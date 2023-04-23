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


    span {
        font-weight: 700;
        font-size: 25px;
        letter-spacing: -1px;
    }
`;