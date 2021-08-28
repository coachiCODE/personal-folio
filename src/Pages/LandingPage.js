import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import Typical from 'react-typical';

const steps = [
    'Portuguese 🇵🇹 🇵🇹', 1500,
    'Based in Coimbra 🌍 🪐', 1500,
    'Junior Web Developer 👨‍💻 💻 ',2000,
    'Msc Student in Informatics Engineering 👨🏽‍🎓 📚',2000,
    'Passionate, Persistent, Ambitious 🚀 🚀',2000,
    'Guitar Enthusiast 🎸 🎸',1500,
];

function LandingPage() {
    return (
        <LandingPageStyled>
        <div className="particle-con">
            <Particle />
        </div>
        <div className="typography">
            <h1>Hi, I'm <span>Tiago Delgado</span></h1>
            <span style={{fontSize:"3.5rem"}}> I am, {''}</span>
                <Typical
                className={'size'}
                steps={steps}
                loop={Infinity}
                wrapper="p"
                 />
            <div className="icons">
                <a href="https://www.linkedin.com/in/tiago-delgado-067015183/" className="icon i-linkedin">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/coachiCODE" className="icon i-github">
                    <GithubIcon />
                </a>
            </div>
        </div>
    </LandingPageStyled>
)
}

const LandingPageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;

.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .size{
        font-size:1.5rem;
    }
    .p{
        font-size:2rem;
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-youtube{
            &:hover{
                border: 2px solid red;
                color: red;
            }
        }
        .i-github{
            &:hover{
                border: 2px solid #5F4687;
                color: #5F4687;
            }
        }
    }
}
`;
export default LandingPage;
