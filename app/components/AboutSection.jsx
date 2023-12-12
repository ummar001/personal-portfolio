import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/images/aboutme.png" width={500} height={500} alt="about me" />
        <div>
          <h2 className="text-3xl font-bold text-[#00FFFF]" > About me</h2>
          <p>
            My name is Ummar and I'm a Junior full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Node.js, PostgreSQL,
             HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
            </p>
        </div>
       
      </div>
    </section>
  );
};

export default AboutSection;
