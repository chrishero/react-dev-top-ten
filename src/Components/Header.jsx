import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: rgba(255,255,255,.75);
  margin-bottom: 1rem;
  padding: 2rem;
  h1 {
    margin: 0;
  }
`;

const Container = styled.div`
  margin-inline: auto;
  max-width: 60rem;
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <h1>⚛️ Top Ten React JS Contributors</h1>
        </Container>
      </StyledHeader>
    </>
  )
}