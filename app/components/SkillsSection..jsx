import React from 'react';

const SkillsSection = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-[#00FFFF] mb-8">⚡ Stats & Skills ⚡
     
      <br />
      <p align="center">
        <div align="center">
          <a href="https://github.com/ummar001/github-readme-stats" title="Go to Source">
            <img align="right" width="390" src="https://github-readme-stats.vercel.app/api?username=ummar001&show_icons=true&theme=react&border_color=61dafb&hide_border=true" alt="GitHub Stats" />
          </a>
          <br />
          <a href="https://github.com/ummar001/github-readme-streak-stats" title="Go to Source">
            <img align="left" width="390" src="https://streak-stats.demolab.com/?user=ummar001&theme=react&border=61dafb&hide_border=true" alt="GitHub Streak" />
          </a>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div align="center">
          <a href="https://github.com/ummar001/github-readme-stats">
            <img height="200" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ummar001&size_weight=0.5&count_weight=0.5&theme=react&border=61dafb&hide_border=true" alt="Top Languages" />
          </a>
        </div>
      </p>

      {/* Include the Skills Section here */}
      <div className="skills-container">
        <h3 align="center">Languages and Tools:</h3>
        <div className="flex justify-center items-center">
          {/* Add your skill icons and links here */}
        </div>
        {/* Add more skill sections if needed */}
      </div>
      </h2>
    </>
  );
};

export default SkillsSection;
