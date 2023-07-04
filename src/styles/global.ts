import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    --white-color: #FFFFFF;
    --white-color-10: #E7E8EA;

    --gray-color: #656B77;

    --purple-color: #820AD1;

    --purple-linear-gradient: linear-gradient(71.32deg, #8E2DE2 0%, #4A00E0 100%);
    --blue-linear-gradient: linear-gradient(71.32deg, #005BEA 0%, #00C6FB 100%);
    --black-linear-gradient: linear-gradient(71.32deg, #434343 0%, #000000 100%);
    --lilac-linear-gradient: linear-gradient(71.32deg, #5E008D 0%, #720080 58.45%, #720080 100%);
    --dark-blue-linear-gradient: linear-gradient(71.32deg, #0F0C29 0%, #302B63 51.06%, #24243E 100%);
	}

	body {
    color: var(--gray-color);
    background-color: var(--white-color);
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;
