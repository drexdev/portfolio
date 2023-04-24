import Link from 'next/link';
import styled from 'styled-components';

export const ButtonPrimary = styled(Link)`
    background-color: var(--color-box-primary);
    color: var(--color-box-primary-text);
    transition: all 0.4s ease;
    border-radius: 50px;
    padding: 18px 30px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: none;

    &:hover {
        background-color: var(--color-box-secondary);
        color: var(--color-box-secondary-text);
    }
`;