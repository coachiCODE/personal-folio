import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectsInfo from '../data/projects';
import ProjectItem from '../Components/ProjectItem';

const ProjectStyle = styled.div`
.container{
    padding:5rem;
    h1{
        text-align:center;
        color:#057FFF;
    }
    h5{
        text-align:center;  
    }
}
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 5rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [projectsData ] = useState(ProjectsInfo);
  
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <h5>check out my recent work</h5>
            <h1>🚀 Projects 🚀</h1>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                title={item.name}
                desc={item.desc}
                img={item.img}
                website={item.website}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}