import React from "react";
import {Title, HeaderContainer, BurgerMenu} from "../styles"
import styled from "styled-components"


const Header = () => {
    let toogled = false;

    const NavDisplay = () => {
        let navToogle =  document.getElementById("nav");

        if(toogled === false){
            navToogle.style.display = "flex";
            toogled = true;
        }else{
            navToogle.style.display = "none";
            toogled = false;

        }
       
    }

    return (
        <HeaderContainer>
            <Title>Toinou Le Chevalier</Title>
            <BurgerMenu onClick={() => NavDisplay()}>
                <span></span>
                <span></span>
                <span></span>
            </BurgerMenu>
            <Nav id="nav">
            <a href="#">1. Flash Tattoo</a>
            <a href="#">2. On Flesh</a>
            <a href="#">3. Contact</a>
            <a href="#">4. Shop</a>
            </Nav>
        </HeaderContainer>
    )

}

const Nav = styled.nav`
display:none;
background:#1b1b1b;
position:absolute;
width:100%;
justify-content: space-around;
align-items:center;
height: 100%;
    a{
        color: #23d997;
        text-decoration:none;
        font-size: 3rem;
    }
    a:hover{
        border-bottom:5px solid #23d997;
    }
    @media only screen and (max-width:  800px) {
    flex-direction:column;

    padding: 4rem;
    a{
        font-size:1.5rem;
    }
    a:hover{
        border-bottom: 2px solid #23d997;
    }
    }
`;

export default Header;