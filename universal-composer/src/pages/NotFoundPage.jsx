// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #fff;
  background-color: #1e3c72;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #ccc;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <StyledLink to="/">Go back to Home</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
