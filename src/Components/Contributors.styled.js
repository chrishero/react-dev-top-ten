import styled from 'styled-components';

const customMediaQuery = (minWidth) => `@media (min-width: ${minWidth}px)`;

const media = {
	phone: customMediaQuery(0),
	tablet: customMediaQuery(576),
	desktop: customMediaQuery(768),
	desktopLarge: customMediaQuery(950)
};

export const Container = styled.div`
  max-width: 60rem;
  margin-inline: auto;
  min-height: 100vh;
  padding: 0 1rem 2rem;
`;

export const ContributorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: .5rem;
`;

export const ContributorBlock = styled.div`
  align-items: flex-start;
  background-color: rgba(255,255,255,.875);
  display: flex;
  flex-direction: row;
  padding: .25rem;
  text-align: left;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  >img {
    width: 2.75rem;
  }
  h4 {
    margin: 1rem .5rem 0;
  }
  div.user-details {
    color: #222;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: normal;
    margin: 0 1rem 0 .5rem;
    span {
      font-weight: bolder;
      line-height: 1.5;
      &:nth-child(2) {
        color: darkcyan;
        font-size: .875rem;
        font-weight: normal;
        ${media.desktop} {
          white-space: nowrap;
        }
      }
      &:last-child {
        color: #222;
        font-weight: normal;
        white-space: nowrap;
      }
    }
  }
`;

export const ShowMore = styled.div `
  display: flex;
  margin-top: 1rem;
  :hover {
    cursor: pointer;
  }
  span+span {
    margin-left: .25rem;
  }
`;