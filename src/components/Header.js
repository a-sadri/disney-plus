import styled from 'styled-components';

export default function Header() {
  return (
    <Nav>
      <Logo src='./images/logo.svg' />
      <NavMenu></NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div``;
