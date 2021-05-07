import styled from "styled-components";

export const AppContainer = styled.div`

`;
export const Title = styled.h1`
    font-family: "Cinzel";
    color: white;
    letter-spacing: 0.1rem;
    font-size:2.5rem;
    margin-left:5rem;
    margin-top:2rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #23d997;
    z-index:99;
    cursor:pointer;
    width: 40%;
    @media only screen and (max-width:  800px) {
    width:65%;  
    font-size:1rem;
    margin-left:1rem;
    }
`;

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 5rem 10rem;
    color: white;
    @media only screen and (max-width:  800px) {
    display:block;
    width:100%;
    padding: 3rem 3rem;
    h2{
        margin: 0%;
        padding:0%;
        width: 100%;
    }
    }
`;
export const Description = styled.div`
    flex: 1;
    padding-right:5rem;
    h2{
        font-weight:lighter;
    }
    @media only screen and (max-width:  800px) {
        padding:0%;
    h2{
        font-size:2rem;
    }
    }

`;
export const Image = styled.div`
    flex: 1;
    overflow:hidden;
    img{
        width : 80%;
        height: 60vh;
        margin-left:20%;
        object-fit:cover;
    }
    @media only screen and (max-width:  800px) {
        img{
            margin:0%;
            width:100%;
            padding-top:2rem;
        }
    }
`;
export const Hide = styled.div`
    overflow:hidden;
`;


export const Services = styled(About)`
    h2{
        padding-bottom:5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media only screen and (max-width: 1600px) {
        p{
            width: 100%;
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap:wrap;   
`;
export const Card = styled.div`
    flex-basis: 20rem;
    @media only screen and (max-width: 1600px) {
    flex-basis: 15rem;
    p{
        font-size:1.1rem;
    }
  }
  @media only screen and (max-width:  800px) {
      margin-left:1rem;
    } 
`;
export const Icones = styled.div`
    display:flex;
    align-content:center;
    img{
        width: 15%;
    }
    h3{
        margin-left:1rem;
        color: black;
        padding: 0.8rem;
        background:white;
    }
`;


export const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;   
    } 
    @media only screen and (max-width:  800px) {
        h2{
            font-size:2rem;
        }
    }
    .faq-line{
        background: #cccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
    @media only screen and (max-width: 1600px) {
        p{
            font-size:1.1rem;
        }
    }
`;

export const HeaderContainer = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    background-color: #262525;
`;
export const BurgerMenu = styled.div`
    z-index:99;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 85px;
    padding-top:1.7rem;
    padding-bottom:1.7rem;
    padding-left:1.2rem;
    padding-right:1.2rem;
    margin-right:10%;
    cursor:pointer;
    @media only screen and (max-width: 800px) {
       width: 50px;
       margin-right:5%;
       padding-top:1.2rem;
       padding-bottom:1.2rem;
       padding-left:0.7rem;
       padding-right:0.7rem;


    }
    span{
        display:flex;
        width:100%;
        height: 5px;
        background-color:#23d997;
    }
`;