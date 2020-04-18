import {createGlobalStyle} from "styled-components";

export default createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
  }

  html {
    font-size: 62.5%;
    --color-main: ${props => props.theme.colors.main};
    --color-gray: ${props => props.theme.colors.gray};
    --color-grayDark: ${props => props.theme.colors.grayDark};
    --color-primary: ${props => props.theme.colors.primary};
    --color-primaryLight: ${props => props.theme.colors.primaryLight};
    --color-danger: ${props => props.theme.colors.danger};

    @media ${props => props.theme.mediaQueries.small} {
      font-size: 60%;
    }
  }

  body {
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
    line-height: 1.3;
    color: var(--color-main);
  }

  .slick-list{
    padding: 2.4rem 0 1.8rem;
  }
`;
