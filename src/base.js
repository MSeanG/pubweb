import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* put styles that are sitewide here.
they should be few and far between. */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

`

export default GlobalStyle;