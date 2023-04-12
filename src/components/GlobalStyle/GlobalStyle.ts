import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --black: #000;
    --text-primary: #1F3E5A;
    --text-secondary: #4C5862;
    --footer-bg: #24242C;
    --btn-hover: #FF7B86;
    --nav-mobile: #2D2E40;
    --sub-menu: #f3f3f3;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
}
body {
    font-family: 'Overpass', sans-serif;
}
button {
    cursor: pointer;
    font-family: inherit;
}
a, li {
    text-decoration: none;
    color: inherit;
    cursor:pointer;
    font-family: inherit;
}
ul {
    list-style-type: none;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
button {
    border:none;
}
`
// font-family: 'Overpass', sans-serif;
// font-family: 'Ubuntu', sans-serif;

// - Light red (CTA text): hsl(356, 100%, 66%)
// - Very light red (CTA hover background): hsl(355, 100%, 74%)
// - Very dark blue (headings): hsl(208, 49%, 24%)

// ### Neutral

// - White (text): hsl(0, 0%, 100%)
// - Grayish blue (footer text): hsl(240, 2%, 79%)
// - Very dark grayish blue (body copy): hsl(207, 13%, 34%)
// - Very dark black blue (footer background): hsl(240, 10%, 16%)

// ### Gradient

// Background gradient - Intro/CTA mobile nav:

// - Very light red: hsl(13, 100%, 72%)
// - Light red: hsl(353, 100%, 62%)

// Background gradient - body:

// - Very dark gray blue: hsl(237, 17%, 21%)
// - Very dark desaturated blue: hsl(237, 23%, 32%)