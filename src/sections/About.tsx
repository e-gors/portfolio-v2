import AboutImage from "@images/about-image.png";
import TitleHeader from "@components/TitleHeader";
import GradientSphere from "@components/GradientSphere";
import { socialMediaLinks, TECH_STACKS } from "@constants/constants";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen bg-primary relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1"
    >
      <TitleHeader title="About Me" number="01" />

      <div className="content flex flex-wrap flex-col lg:flex-row pt-10 items-center justify-center">
        <div className="left flex-1 justify-center md:px-2 pb-5 lg:pb-0">
          <img
          loading="lazy"
            src={AboutImage}
            alt="About Me"
            className="max-w-full h-auto w-[280px] md:w-[420px] lg:w-[520px]"
          />
        </div>
        <div className="right flex-1 space-y-4">
          <p className="text-base md:text-lg text-justify md:text-left">
            I’m a dedicated full-stack developer who thrives on new challenges
            and continuous growth. I build responsive, engaging web applications
            with a strong focus on clean, maintainable, and scalable code. I
            enjoy collaborating with others to solve complex problems and take
            pride in creating software that is both functional and easy to
            understand.
          </p>
          <p className="text-base md:text-lg text-justify md:text-left">
            I specialize in front-end and back-end development using React,
            Redux Toolkit, Tailwind CSS, Material UI, NestJS, and Laravel. At
            JLabs, I worked on a real-world vehicle management platform
            featuring bookings, auctions, real-time updates, and secure
            transactions. I also have experience with AWS services like S3 and
            CloudFront to improve performance and scalability, and I’m always
            learning and refining my craft to build impactful software.
          </p>
          <div className="flex gap-x-4 h-20 mt-5">
            {socialMediaLinks.map((link) => {
              const IconComponent = link.icon;
              return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <IconComponent
                    width={40}
                    height={40}
                  />
              </a>
            )
            })}
          </div>
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="tech-stack overflow-hidden pt-5 lg:pt-10 relative w-full">
        <div className="stack-icon-container flex flex-nowrap gap-x-8 animate-scroll">
          {[...TECH_STACKS, ...TECH_STACKS].map(({ name, Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="stack-card stack-icon flex items-center justify-center rounded-xl bg-white/5 transition shrink-0 cursor-pointer w-18 h-18 md:w-25 md:h-25"
              title={name}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-3" secondSphere="sphere-4" />
    </section>
  );
}
