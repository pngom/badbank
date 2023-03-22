/* Source: https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m */

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #10ccf4;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  margin-right: auto;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
`;