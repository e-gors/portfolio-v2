import React from "react";
import GradientSphere from "@components/GradientSphere";
import TitleHeader from "@components/TitleHeader";
import CustomButton from "@components/CustomButton";
import ArrowUpIcon from "@icons/ArrowUpIcon";
import Portfolio from "@images/Portfolio.png";
import { projects } from "@constants/constants";
import type { ProjectProps } from "@types/types";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-screen bg-primary relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1"
    >
      <TitleHeader title="Projects" number="03" />

      <div className="content flex flex-col gap-10 pt-5">
        {projects.map((project: ProjectProps, index: number) => (
          <div className="project-card flex flex-wrap flex-col md:flex-row gap-6 md:gap-12" key={index}>
            <div className="left flex-1">
              <p className="text-base md:text-lg font-semibold pb-2">
             {project.page}
              </p>
              <h3 className="text-xl md:text-1xl font-bold">
             {project.title}
              </h3>
              <p className="text-base md:text-lg max-w-xl">
                {project.description}
              </p>
              <CustomButton
                className="pt-2"
                variant="text"
                endIcon={<ArrowUpIcon width={24} height={24} />}
              >
                View Live
              </CustomButton>
            </div>
            <div className="right flex-1 rounded-lg overflow-hidden shadow-card">
              <img src={project.image} alt="Project" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-2" />
    </section>
  );
}
