import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';



const Navbar = ({toggle}) => {
    return (
    <>

      <Nav>
        <NavbarContainer>
          <NavLogo to='/'> bestmovies</NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='movies'>Movies</NavLinks> 
            </NavItem>
            <NavItem>
              <NavLinks to='series'>Series</NavLinks> 
            </NavItem>
            <NavItem>
              <NavLinks to='top'>Top</NavLinks> 
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/search'>Search</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>

   </>
    );
};

export default Navbar;