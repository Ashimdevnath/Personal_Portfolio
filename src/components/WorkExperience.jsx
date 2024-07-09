import React from 'react';

const WorkExperience = () => {
  // Sample data for skills
  const skills = [
    { title: 'HTML 5', year: '2022', description: 'Creating structured web pages.', proficiency: 80 },
    { title: 'CSS 3', year: '2022', description: 'Styling web pages with CSS.', proficiency: 75 },
    { title: 'Tailwind CSS', year: '2022', description: 'Utilizing utility-first CSS framework.', proficiency: 70 },
    { title: 'JavaScript', year: '2023', description: 'Programming interactive web pages.', proficiency: 80 },
    { title: 'React JS', year: '2024', description: 'Building modern web applications.', proficiency: 70 },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">Year: {skill.year}</p>
              <p className="text-xs md:text-sm text-gray-600 mb-4">{skill.description}</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs md:text-sm font-semibold inline-block py-1 px-2 md:px-3 uppercase rounded-full text-[#FB6542] bg-[#FFECE6]">
                      Proficiency: {skill.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-1 md:h-2 mb-4 bg-[#FFECE6] rounded">
                  <div style={{ width: `${skill.proficiency}%` }} className="h-full bg-[#FB6542]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
