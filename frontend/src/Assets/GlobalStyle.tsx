import { createGlobalStyle, keyframes } from "styled-components";

// ANIMATIONS
const animeLeft = keyframes`
  to{
    transform: translateX(0);
		opacity: 1;
  }
`;
const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

a{
	text-decoration: none;
	color: #333;
}
;
button, input{
  /* display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: #333; */
}
body {
	line-height: 1;
	margin:0;
	background-color: #000;
	font-family: 'Roboto', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;

}
.animateLeft{
	opacity: 0;
	transform: translateX(-20px);
	animation: ${animeLeft} .3s forwards;
}
/* Estilização geral */
h1{
	/* font-family: var(--type-second);
	font-size: 3rem;
	margin: 1rem 0;
	position: relative;
	z-index: 1; */
}
h1::after{
	/* content: '';
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	background: #fb1;
	bottom: 5px;
	left: -5px;
	border-radius: 0.2rem;
	z-index: -1;
	position: absolute; */
}
`;

export default GlobalStyle;
