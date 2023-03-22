import React from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./MyNavBarElements.js";

const MyNavBar = () => {
    return(
        <>
           <Nav>
            <NavLogo to="/"> Bad Bank </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink data-tooltip-id="my-tooltip1" data-tooltip-content="Landing page!" to="/" activeStyle={{ color:'black' }}>
                    Home
                </NavLink>
                <ReactTooltip id="my-tooltip1" place="top" type="dark" effect="solid"/>
				
                <NavBtn>
                    <NavBtnLink data-tooltip-id="my-tooltip2" data-tooltip-content="Click to create your account!" to="/createaccount">Create Account</NavBtnLink>
                </NavBtn>
                <ReactTooltip id="my-tooltip2" place="top" type="dark" effect="solid"/>

                <NavLink data-tooltip-id="my-tooltip3" data-tooltip-content="Click to make a deposit!" to="/deposit" activeStyle={{ color: 'black' }}>
                    Deposit
                </NavLink>
                <ReactTooltip id="my-tooltip3" place="top" type="dark" effect="solid"/>
				
                <NavLink data-tooltip-id="my-tooltip4" data-tooltip-content="Click to make a withdrawal!" to="/withdrawal" activeStyle={{ color: 'black' }}>
                    Withdrawal
                </NavLink>
                <ReactTooltip id="my-tooltip4" place="top" type="dark" effect="solid"/>
				
                <NavLink to="/alldata" activeStyle={{ color: 'black' }}>
                    All Data
                </NavLink>
				
            </NavMenu>
           </Nav> 
        </>    
    )
};

export default MyNavBar;