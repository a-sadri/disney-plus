import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <div>
      <Container>
        <CTA>
          <Logo src='/images/cta-logo-one.svg' />
          <Signup>Get All There</Signup>
        </CTA>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 850px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
`;
