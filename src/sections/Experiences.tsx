// Timeline.jsx
import React from "react";
import { TimelineItem } from "@components/TimelineItem";
import { workExperience } from "@constants/constants";
import type { ExperienceItem } from "@types/types";
import { education } from "@constants/constants";
import type { EducationProps } from "@types/types";
import GradientSphere from "@components/GradientSphere";
import TitleHeader from "../components/TitleHeader";

const Experiences = () => {
  return (
    <section className="w-screen bg-primary relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1">
      <TitleHeader title="My Experiences" number="02" />
      <div className="flex flex-wrap flex-col md:flex-row space-y-16 gap:5 md:gap-10">
        {/* Work Experience */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="relative">
            {workExperience.map((item: ExperienceItem, index: number) => (
              <TimelineItem
                key={index}
                title={item.title}
                subtitle={item.company}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="relative">
            {education.map((item: EducationProps, index: number) => (
              <TimelineItem
                key={index}
                title={item.degree}
                subtitle={item.school}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-4" />
    </section>
  );
};

export default Experiences;
