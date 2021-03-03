import React from "react";
import {Services, Description, Image, Icones, Cards, Card} from "../styles";
import home2 from "../img/home2.jpg"


const ServicesSection = (props) => {
    const services = props.services;
    

    return (
        <Services>
            <Description>
                <h2>Un Art, Une <span>Passion</span></h2>
                <Cards>
                {services.map((service, i) => { return (
                    <Card key={i}>
                        <Icones className="icons">
                            <img src={service.icone} />
                            <h3>{service.title}</h3>
                         </Icones>
                        <p>{service.details}</p>
                     </Card>
                )})}       
                </Cards>
            </Description>
            <Image>
                <img alt="flash-tattoo" src={home2} />
            </Image>
        </Services>
    )
}

export default ServicesSection;