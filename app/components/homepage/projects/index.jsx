'use client';

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggle = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-[#1b2c68a0] bg-[#0d1224]/60 p-4 backdrop-blur shadow-md"
            >
              <button
                onClick={() => toggle(project.id)}
                className="w-full text-left text-[#16f2b3] text-lg font-medium flex justify-between items-center"
              >
                {project.name}
                <span className="text-white">{openProject === project.id ? '^' : 'v'}</span>
              </button>

              {openProject === project.id && (
                <div className="mt-4">
                  <ProjectCard project={project} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
