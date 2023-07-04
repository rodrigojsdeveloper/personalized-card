import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Lexend', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
	}

	body {
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;
