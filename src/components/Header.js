import React from "react";
import {Title, HeaderContainer, BurgerMenu} from "../styles"


const Header = () => {

    return (
        <HeaderContainer>
            <Title>Toinou Le Chevalier</Title>
            <BurgerMenu>
                <span></span>
                <span></span>
                <span></span>
            </BurgerMenu>
        </HeaderContainer>
    )

}

export default Header;