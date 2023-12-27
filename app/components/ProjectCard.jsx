import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BlueDot from './bluedotcomponent/BlueDot'
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="max-w-md m-2">
      <div
        className="group rounded-t-xl h-40 md:h-60 bg-center relative overflow-hidden sm:m-2 sm:pr-2"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href={gitUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#00FFFF] hover:border-white mr-2 group/link"
          >
            <EyeIcon className="h-6 w-6 text-[#00FFFF] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#00FFFF] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#00FFFF] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-2 px-2 text-[#00FFFF]">
        <h5 className="font-medium">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
      <BlueDot size={10} />
    </div>
  );
};

export default ProjectCard;
