import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <div>
      <Container>
        <CTA>
          <Logo src='/images/cta-logo-one.svg' />
          <Signup>Get All There</Signup>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel,
            eius alias nulla dolorem rem, aut cum ab amet fuga facilis. Officia
            doloremque inventore ab vero eveniet culpa perspiciatis molestiae.
          </Description>
          <LogoTwo src='/images/cta-logo-two.png' />
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
  align-items: top;

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
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-item: center;
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
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const LogoTwo = styled.img`
  width: 90%;
`;
