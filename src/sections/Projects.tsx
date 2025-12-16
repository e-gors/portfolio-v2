import GradientSphere from "@components/GradientSphere";
import TitleHeader from "@components/TitleHeader";
import CustomButton from "@components/CustomButton";
import ArrowUpIcon from "@icons/ArrowUpIcon";
import { projects } from "@constants/constants";
import type { ProjectProps } from "@/types/types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
   useGSAP(() => {
    // card slide animation
    gsap.from(".animated-project-card", {
      opacity: 0,
      x: 150,
      stagger: 1,
      duration: 3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '#projects',
        start: 'top center',
      }
    });

     // text slide animation
    gsap.from(".animated-project-text", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '#projects',
        start: 'top center',
      }
    });
  });

  return (
    <section
      id="projects"
      className="w-screen bg-primary relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1"
    >
      <TitleHeader title="Projects" number="03" />

      <div className="content flex flex-col gap-10 pt-5">
        {projects.map((project: ProjectProps, index: number) => (
          <div className="flex flex-wrap flex-col md:flex-row gap-6 md:gap-12" key={index}>
            <div className="left flex-1">
              <p className="animated-project-text text-base md:text-lg font-semibold pb-2">
             {project.page}
              </p>
              <h3 className="animated-project-text text-xl md:text-1xl font-bold">
             {project.title}
              </h3>
              <p className="animated-project-text text-base md:text-lg max-w-xl">
                {project.description}
              </p>
              <CustomButton
                className="pt-2 animated-project-text"
                variant="text"
                endIcon={<ArrowUpIcon width={24} height={24} />}
              >
                View Live
              </CustomButton>
            </div>
            <div className="animated-project-card right flex-1 rounded-lg overflow-hidden shadow-card">
              <img loading="lazy" src={project.image} alt="Project" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-2" />
    </section>
  );
}
