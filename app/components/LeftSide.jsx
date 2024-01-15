import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialGoogle,
} from "react-icons/sl";
import { TbBrandDiscordFilled } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";

const LeftSide = () => {
  return (
    <div
      className="w-10 h-full flex flex-col items-center justify-center gap-4 text-textLight fixed left-0 top-1/2 transform -translate-y-1/2 xl:pl-20"
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ummar001" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub color="white" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/ummarmohammed/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin color="white" />
          </span>
        </a>
        <a
          href="https://x.com/ummar01?t=K-HQSCPkHHqz06FijH_BfA&s=08"
          target="_blank"
        >
          {/* Replace Facebook with Twitter */}
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
           <RiTwitterXFill color="white" />
          </span>
        </a>
        <a href="mailto:m.ummar.uk@gmail.com" target="_blank">
          {/* Replace Instagram with Gmail */}
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialGoogle color="white" />
          </span>
        </a>

        <a href="https://discord.com/users/_ummar" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandDiscordFilled color="white"/>
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
