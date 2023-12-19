"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "public/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ummar001/portfolio-website",
    previewUrl: "https://github.com/ummar001/personal-portfolio",

  },
  {
    id: 2,
    title: "React App For Naughts and crosses",
    description: "Project 2 description",
    image: "/images/React App For Naughts and crosses.png",
    tag: ["All", "Web"],
    gitUrl: "https://ummar001.github.io/React_App_For_Naughts_and_crosses/",
    previewUrl: "https://github.com/ummar001/React_App_For_Naughts_and_crosses/",
   
  },
  {
    id: 3,
    title: "Pending Project",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:"/",
  },

  {
    id: 4,
    title: "Pending Project",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl:"/",
  },
  {
    id: 5,
    title: "Pending Project",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:"/",
  },
  {
    id: 6,
    title: "Pending Project",
    description: "Project 6 description",
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
      <h2 className="text-center text-4xl font-bold text-[#00FFFF] mt-10 mb-8 md:mb-1">
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