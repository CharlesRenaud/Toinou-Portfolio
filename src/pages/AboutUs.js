import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import FaqSection from "../components/FaqSection"

const AboutUs = () => {
    const [information, setInformation] = useState("");
    const [services, setServices] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get("/api/AboutUs").then((response) => {
          setInformation(response.data);
        });
        axios.get("/api/AboutSection").then((response) => {
          setServices(response.data);
        });
        axios.get("/api/FaqSection").then((response) => {
          setQuestions(response.data);
        });
      }, []);

    return (
        <div>
            <AboutSection information={information} />
            <ServicesSection services={services}/>
            <FaqSection questions={questions} />
        </div>
    )
}

export default AboutUs;