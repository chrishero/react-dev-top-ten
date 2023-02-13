import styled from 'styled-components';

const customMediaQuery = (minWidth) => `@media (min-width: ${minWidth}px)`;

const media = {
	phone: customMediaQuery(0),
	tablet: customMediaQuery(576),
	desktop: customMediaQuery(768),
	desktopLarge: customMediaQuery(950)
};

export const StyledContributorDetails = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1.125rem;
  grid-template-columns: 1fr 3fr;
  ${media.desktop} {
    flex-direction: row;
    font-size: 1.25rem
	}
  div {
    flex-grow: 1;
    padding: .5rem
  }
  img {
    align-self: flex-start;
    display: block;
    flex-shrink: 1;
    width: 100%;
    ${media.desktop} {
      height: 100%;
      max-width: 50%;
    }
  }
  p {
    color: darkcyan;
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem;
    span {
      color: #222;
      font-size: 1rem;
      padding-right: .25rem;
    }
  }
`;