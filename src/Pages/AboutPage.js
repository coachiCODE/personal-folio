import React from 'react'
import styled from 'styled-components';
import MySkills from '../Components/MySkills'
import AboutMe from '../Components/AboutMe'
import { DiJsBadge} from "react-icons/di";
import { DiPhp} from "react-icons/di";
import { DiReact} from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { BsChevronDoubleDown } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";


function AboutPage() {
    return (
        <AboutPageStyles>
        <div className="AboutPage">
            <AboutMe />
            <h3> <BsChevronDoubleDown/> My Skills <BsChevronDoubleDown/></h3>
            <div className="skillsContainer">
                <MySkills skill={'HTML'} logo={<DiHtml5/>} progress={'80%'} width={'80%'}  />
                <MySkills skill={'CSS'} logo={<DiCss3/>} progress={'70%'} width={'70%'} />
                <MySkills skill={'Javascript'} logo={<DiJsBadge/>} progress={'60%'} width={'60%'}  />
                <MySkills skill={'My SQL'} logo={<DiMysql/>} progress={'75%'} width={'75%'} />
                <MySkills skill={'React Js'} logo={<DiReact/>} progress={'50%'} width={'50%'} />
                <MySkills skill={'Java OPP'} logo={<DiJava/>} progress={'70%'} width={'70%'} />
                <MySkills skill={'PHP'} logo={<DiPhp/>} progress={'50%'} width={'50%'} />
                <MySkills skill={'GitHub - Version Control'} logo={<DiGithubBadge/>} progress={'50%'} width={'50%'} />

            </div>
    </div>
    </AboutPageStyles>
    )
}
const AboutPageStyles = styled.div`
  h3{
    text-align:center; 
    color:#057FFF; 
  }
`;
export default AboutPage;
