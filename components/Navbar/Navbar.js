import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../pages/globalStyles";
import Link from "next/link";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavIcon />
            KULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <Link href="/" passHref>
                <NavLinks> NEXTJS </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/" passHref>
                <NavLinks> HOME </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" passHref>
                <NavLinks> ABOUT </NavLinks>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact" passHref>
                <NavLinks> CONTACT </NavLinks>
              </Link>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink>
                  <Button primary>Sign Up</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink>
                  <Button fontBig primary>
                    Sign Up
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
