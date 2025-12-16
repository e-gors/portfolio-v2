import { useRef } from "react";
import HeroImage from "@images/hero-image.png";
import WavingHand from "@images/waving-hand.png";
import GradientSphere from "@components/GradientSphere";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowDownRoundedIcon from "@icons/ArrowDownRoundedIcon";
import CustomButton from "@components/CustomButton";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const handRef = useRef<HTMLImageElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      // hand waving
      gsap.to(handRef.current, {
        rotation: 20,
        yoyo: true,
        repeat: -1,
        duration: 0.5,
        ease: "power1.inOut",
        transformOrigin: "70% 70%",
      });

      // arrow bouncing
      gsap.to(arrowRef.current, {
        y: -5,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power1.inOut",
      });

      // photo slide animation
      gsap.from(".animated-hero-photo", {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power3.inOut",
      });
      // text slide animation
      gsap.from(".animated-hero-text", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.inOut",
      });
    },
  );

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <section
      id="home"
      className="w-screen container relative mx-auto min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 py-12 gap-8 md:gap-12"
    >
      <div className="left w-full lg:w-1/2 flex flex-col md:items-start md:text-left gap-4">
        <div className="w-full flex items-center gap-2">
          <p className="text-base md:text-lg">Hello,</p>
          <img
            ref={handRef}
            src={WavingHand}
            alt="Waving Hand"
            className="w-6 md:w-10"
          />
          <p className="text-base md:text-lg">I'm</p>
        </div>
        <h1 className="animated-hero-text w-full text-3xl md:text-6xl leading-normal font-bold">
          Efren, a FullStack Software{" "}
          <span className="text-accent">Developer</span>
        </h1>
        <p className="animated-hero-text text-base md:text-lg text-justify md:text-left">
          A dedicated developer passionate about creating modern, user-friendly,
          and optimized websites with robust functionalities. Committed to
          learning new trends and technologies to continuously improve skills.
          Aims to deliver high-quality web solutions tailored to your needs.
        </p>
        <div className="flex gap-x-4">
          <CustomButton
            variant="contained"
            onClick={() => handleClick("/#services")}
          >
            Services
          </CustomButton>
          <CustomButton
            variant="outlined"
            onClick={() => handleClick("/#projects")}
          >
            My Work
          </CustomButton>
        </div>

        <div className="w-100 px-4 flex items-center gap-2 mt-4 absolute bottom-4">
          <p className="text-base text-nowrap">Explore</p>
          <ArrowDownRoundedIcon ref={arrowRef} width={32} height={32} />
        </div>
      </div>

      <div className="right w-full lg:w-1/2 flex items-center justify-center">
        <img
          loading="lazy"
          src={HeroImage}
          alt="hero"
          className="animated-hero-photo max-w-full h-auto w-[280px] md:w-[420px] lg:w-[520px]"
        />
      </div>

      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-2" />
    </section>
  );
}
