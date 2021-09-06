import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #070928;

        --blue-light: #3456ff;

        --tex-titlle: #363f5f;
        --tex-body: #969cb3;

        --shape: #ffffff;

    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;

    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }


    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`