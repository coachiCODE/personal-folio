import React from 'react'
import styled from 'styled-components';

function MySkills({skill,logo,progress,width}) {
    return (
        <MySkillStyled>
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill} {logo}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width:width}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </MySkillStyled>
    )
}
const MySkillStyled = styled.header`
.SkillsSection{
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
}
.skills-container{

    .skill-title{
        font-size: 1.4rem;
        font-weight: 400;
    }
    .skill-bar{
        display: flex;
        align-items: center;
        .skill-text{
        }
        .skill-progress{
            width: 100%;
           .progress{
               width: 90%;
               height: .5rem;
               background-color: red;
               margin-left: 1rem;
               background-color: #0381ff3f;
               position: relative;
               .inner-pregress{
                    position: absolute;
                    background-color: #037FFF;
                    height: 100%;
                    bottom: 0;
                    left: 0;
               }
           }
        }
    }
}
`;

export default MySkills;
