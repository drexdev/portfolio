'use client';

import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: ${theme.colors.background};
        --color-primary: ${theme.colors.primary};
        --color-box-primary: ${theme.colors.box.primary.background};
        --color-box-primary-text: ${theme.colors.box.primary.textColor};
        --color-box-secondary: ${theme.colors.box.secondary.background};
        --color-box-secondary-text: ${theme.colors.box.secondary.textColor};
        --color-text-default: ${theme.colors.text.default};
        
        --font-size-subtitle-big: ${theme.font.size.subTitle.big};
        --font-size-title-big: ${theme.font.size.title.big};
        --font-size-description-big: ${theme.font.size.description.big};

        --font-size-subtitle: ${theme.font.size.subTitle.normal};
        --font-size-title: ${theme.font.size.title.normal};
        --font-size-description: ${theme.font.size.description.normal};
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--color-background);
        color: var(--color-text-default);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;