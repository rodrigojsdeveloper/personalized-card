import { createGlobalStyle, styled } from "styled-components";

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
		--white-color-20: rgb(242, 243, 245);

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

const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const ContentGlobal = styled.div`
  width: 100%;
  max-width: 930px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: 40px;
  background-color: var(--white-color-20);

  & > .waveMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    max-width: unset;
    flex-direction: column-reverse;

    padding: 35px;

    & > .waveDesktop {
      display: none;
    }

    & > .waveMobile {
      margin-top: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export { ContainerGlobal, ContentGlobal };
