// SkillBadge.js
import React from "react";

const SkillBadge = ({ skill, icon }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-2" dangerouslySetInnerHTML={{ __html: icon }} />
      <p className="00FFFF">{skill}</p>
    </div>
  );
};

export default SkillBadge;
