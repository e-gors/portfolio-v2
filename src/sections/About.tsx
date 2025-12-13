import React from "react";
import AboutImage from "@images/about-image.png";
import TitleHeader from "../components/TitleHeader";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen bg-primary relative mx-auto min-h-screen px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12"
    >
      <TitleHeader title="About Me" number="01" />

      <div className="content flex flex-wrap flex-col lg:flex-row pt-10">
        <div className="left flex-1 justify-center md:px-2">
          <img
            src={AboutImage}
            alt="About Me"
            className="max-w-full h-auto w-auto md:w-[420px] lg:w-[520px]"
          />
        </div>
        <div className="right flex-1">
          <p className="text-base md:text-lg text-justify md:text-left">
            I’m a dedicated developer who thrives on new challenges and is
            always eager to grow. My passion for building responsive, engaging
            web applications keeps me up to date with the latest technologies
            and trends. I aim to use my skills to contribute to meaningful
            projects and continue evolving as a developer. I value clean,
            maintainable code and enjoy collaborating with others to solve
            complex problems. I take pride in writing code that’s not just
            functional, but scalable and easy to understand.
          </p>
          <p className="text-base md:text-lg text-justify md:text-left">
            I specialize in full-stack web development, combining front-end and
            back-end expertise. I’ve built interactive UIs with React and Redux
            Toolkit, using libraries like Material UI, Tailwind CSS, and
            Bootstrap for responsive design. On the back end, I’ve developed
            scalable APIs with NestJS and Laravel, following best practices in
            architecture and code quality.
          </p>
          <p className="text-base md:text-lg text-justify md:text-left">
            During my time at JLabs, I worked on a real-world vehicle management
            platform that supported bookings, auctions, sales, and trade-ins.
            The system featured user authentication, listing and bid management,
            real-time auction updates, and secure transaction workflows. I also
            have experience working with AWS, particularly S3 and CloudFront, to
            enhance performance and scalability. My workflow focuses on writing
            clean code, improving usability, and optimizing for performance in
            every project. I’m always learning, always building, and always
            striving to create software that makes an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
