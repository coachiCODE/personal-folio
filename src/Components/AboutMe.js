import React from 'react'
import Me from '../images/me.jpg';
import styled from 'styled-components';

function AboutMe() {
    return (
        <AboutMeStyled>
        <div className="safeview">
             <div className="ImageSection">
            <div className="img">
                <img src={Me} alt="myft"/>
            </div>
            <div className="about-info">
                <h2>Hello 👋🏼 , That's me! 👨🏽‍💻</h2>
                <p className="about-text">
                    In a nutshell, <span>I create cool stuff, with cool technologies! 😎 </span><br/>That means i sit at my shiny Macbook Pro all day long<br/> creating & designing cool projects for the Web !
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Countries:</p>
                    </div>
                    <div className="right-section">
                        <p> Tiago Delgado</p>
                        <p> 21</p>
                        <p> Portuguese</p>
                        <p> Portuguese, English </p>
                        <p> Portugal</p>
                    </div>
                </div>
                <a class="btn btn-primary" 
                href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/2ff773cb-bcf1-47ff-b509-0dc612dbde4a?view=html"
                rel="nofollow">View Cv</a>
            </div>
        </div>
        </div>
        </AboutMeStyled>
    )
}
const AboutMeStyled = styled.header`
.safeview{
    padding: 1rem;
}
.ImageSection{
    display: flex;
    margin-top: 4rem;
    margin-bottom: 4rem;
    .img{
        width: 50%;
        height: 75vh;
        img{
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
    @media screen and (max-width: 502px){
        .img{
            width: 100%;
            height: 55vh;
            img{
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
        }    
    }
    @media screen and (max-width: 992px){
        .img{
            width: 100%;
            height: 55vh;
            img{
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
        }    
    }
    .about-info{
        margin-left: 2rem;
        h2{
            font-size: 2rem;
            color:#057FFF;
        }
        h4{
            font-size: 1.25rem;

        }
        .left-section{
            color:#057FFF;
        }
        .about-text{
            padding: 1rem 0;
        }
    }
    @media screen and (max-width: 1400px){
        flex-direction: column;
        .about-info{
            margin-left: 0;
            margin-top: 1rem;
        }
    }
}

.about-details{
    display: flex;
    p{
        padding: .3rem 0;
    }
    .right-section{
        margin-left: 1rem;
    }
}
.btn{
    padding: 1rem 2rem;
    background-color: #037FFF;
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 2px;
    margin-top: 1rem;
    position: relative;
    &::after{
        position: absolute;
        width: 0;
        height: .3rem;
        left: 0;
        bottom: 0;
        background-color: #a4acc4;;
        transition: all 0.4s ease-in-out;
    }
    &:hover::after{
        width: 100%;
    }
}
.skillsContainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 3rem;
    margin: 4rem 0;
    @media screen and (max-width: 1100px){
        grid-template-columns: repeat(1, 1fr);
    }
}
.btn-port{
    padding: .6rem 2rem;
    background-color: #0381ff5b;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    color: white;
    margin-bottom: 1rem;
    transition: all .3s ease-in-out;
    &:not(:last-child){
        margin-right: 1rem;
    }
    &:hover{
        background-color: #037FFF;
    }
    &:active{
        background-color: #037FFF;
    }
    &:focus{
        background-color: #037FFF;
    }
}

.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 10rem;
    flex-wrap: wrap;
    @media screen and (max-width: 1270px){
        margin: 2rem 5rem;
    }
    @media screen and (max-width: 1100px){
        margin: 2rem 2rem;
    }
}
`;

export default AboutMe;
