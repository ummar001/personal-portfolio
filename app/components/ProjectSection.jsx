"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    // description: "Project 1 description",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ummar001/portfolio-website",
    previewUrl: "https://github.com/ummar001/personal-portfolio",

  },
 
  {
    id: 2,
    title: "React App For Naughts and crosses",
    // description: "Project 2 description",
    image: "/images/projects/nandc.png",
    tag: ["All", "Web"],
    gitUrl: "https://ummar001.github.io/React_App_For_Naughts_and_crosses/",
    previewUrl: "https://github.com/ummar001/React_App_For_Naughts_and_crosses/",
   
  },

  {
    id: 4,
    title: "Travel Website App",
    // description: "Project 4 description",
    image: "/images/projects/travelwebsite.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ummar001/-travel-website/tree/master",
    previewUrl:"https://github.com/ummar001/-travel-website/tree/master",
  },
  {
    id: 5,
    title: "Pending Project",
    // description: "Project 5 description",
    image: "/images/projects/weatherpage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ummar001/weather-_project_v2",
    previewUrl:"https://github.com/ummar001/weather-_project_v2",
  },
  {
    id: 6,
    title: "Pending Project",
    // description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:"/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-[#00FFFF] mt-14 mb-9 md:mb-1">
        Projects
      
      <div className="flex flex-row justify-center items-center gap-2 text-[#00FFFF] my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}         
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
           
          />
        ))}
      </div>
      </h2>
    </>
  );
};

export default ProjectsSection;