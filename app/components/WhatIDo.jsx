import React from "react";
import BlueDot from './bluedotcomponent/BlueDot'
const WhatIDo = () => {
  return (
    <section className=" mt-200 pb-5 pt-14 sm:pb-2">
      <div className="flex flex-wrap justify-center lg:mb-20 sm:mb-25">
        <div className="text-center m-4">
          <h2 className="text-3xl font-bold text-center text-[#00FFFF] ">
            What I Do
          </h2>
        
        <div className="flex justify-around max-w-3xl mx-auto">
          <div className="flex flex-col items-center mx-3">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100px", height: "100px", fill: "#00FFFF" }}
            >
              {/* Software Development SVG Path */}
              <path d="M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z" />
            </svg>
            <p className="text-white">Software Development</p>
          </div>
          <div className="flex flex-col items-center mx-3">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100px", height: "100px", fill: "#00FFFF" }}
            >
              {/* Web Design SVG Path */}
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
            </svg>
            <p className="text-white">Web Design</p>
          </div>
          <div className="flex flex-col items-center mx-3">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100px", height: "100px", fill: "#00FFFF" }}
            >
              {/* Web Development SVG Path */}
              <path d="M4 12.862.416 18.431 11.168 24ZM12.831 0 20 11.139l3.584-5.57Zm-.001 24 10.753-5.569L20 12.862Zm11.169-6.647V6.648L20.554 12ZM12 .43 4.832 11.568h14.336Zm0 23.139 7.168-11.139H4.832Zm-8-12.43L11.168 0 .416 5.569ZM0 6.647v10.707L3.445 12Z" />
            </svg>
            <p className="text-white">Web Development</p>
          </div>
        </div>
        </div>
      </div>

              
              <h2 className="text-3xl font-bold text-center text-[#00FFFF] mb-5 text-lg:mb-1">⚡ Stats & Skills ⚡
        
      <br />
      <p align="center">
        <div align="center" className="flex flex-col sm:flex-row justify-center">
          {/* GitHub Stats */}
          <div className="mb-4 sm:mr-8 lg:mr-20">
            <a href="https://github.com/ummar001/github-readme-stats" title="Go to Source">
              <img width="500" height="200" src="https://github-readme-stats.vercel.app/api?username=ummar001&show_icons=true&theme=react&border_color=61dafb&hide_border=true" alt="GitHub Stats" />
            </a>
          </div>

          {/* GitHub Streak */}
          <div className="mt-1 ">
            <a href="https://github.com/ummar001/github-readme-streak-stats" title="Go to Source">
              <img width="500" height="200" src="https://streak-stats.demolab.com/?user=ummar001&theme=react&border=61dafb&hide_border=true" alt="GitHub Streak" />
            </a>
          </div>
        </div>
        
        
        <div align="center">
          <a href="https://github.com/ummar001/github-readme-stats">
            <img height="200" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ummar001&size_weight=0.5&count_weight=0.5&theme=react&border=61dafb&hide_border=true" alt="Top Languages mt-20" />
          </a>
        </div>
      </p>

      {/* Include the Skills Section here */}
      
      </h2>
      <h1></h1>
       
        <BlueDot size="30px" />

      
    </section>
  );
};
export default WhatIDo;
