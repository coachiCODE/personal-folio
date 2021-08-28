import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../images/java_opp.jpeg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 1.5rem;
    color:#057FFF;
  }
  .projectItem__desc {
    font-size: 1rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__web {
    font-size: 1rem;
    font-family: 'RobotoMono Regular';
    color:#057FFF;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 300px;
    }
  }
  @media only screen and (max-width: 502px) {
    .projectItem__img {
      height: 300px;
    }
    .projectItem__info {
      margin-left:0;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = '',
  website='',
}) {
  return (
    <ProjectItemStyles>
      <Link className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
        <p className="projectItem__web" >Link:<br/>{website}</p>
      </div>
    </ProjectItemStyles>
  );
}