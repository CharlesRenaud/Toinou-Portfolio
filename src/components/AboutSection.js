import React from "react";
import {About,Description, Image, Hide} from "../styles"

const AboutSection = (props) => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>{props.information.aboutContent}</h2>
                    </Hide>
                    <Hide>
                        <h2>Donne vie à vos <span>projets</span></h2>
                    </Hide>
                    <p>
                        {props.information.description}
                    </p>
                    <button>Contact</button>
                </div>
            </Description>
            <Image>
                <img alt="Toinou Le chevalier" className="home-img" src={props.information.homeImage}></img>
            </Image>
        </About>
    )
}





export default AboutSection;