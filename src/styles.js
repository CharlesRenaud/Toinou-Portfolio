import styled from "styled-components";


export const Title = styled.h1`
    font-family: "Cinzel";
    color: white;
    letter-spacing: 0.1rem;
    font-size:2.5rem;
    margin-left:5rem;
    margin-top:2rem;
    border-bottom: 3px solid #23d997;
    cursor:pointer;
    width: 40%;
`;

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 5rem 10rem;
    color: white;
`;
export const Description = styled.div`
    flex: 1;
    padding-right:5rem;
    h2{
        font-weight:lighter;
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
            width: 80%;
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