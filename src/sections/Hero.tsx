import React, { useRef } from "react";
import HeroImage from "@images/hero-image.png";
import WavingHand from "@images/waving-hand.png";
import GithubRoundedIcon from "@icons/GithubRoundedIcon";
import FacebookRoundedIcon from "@icons/FacebookRoundedIcon";
import LinkedInRoundedIcon from "@icons/LinkedInRoundedIcon";
import DiscordRoundedIcon from "@icons/DiscordRoundedIcon";
import GradientSphere from "../components/GradientSphere";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const handRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.to(handRef.current, {
      rotation: 20,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: "power1.inOut",
      transformOrigin: "70% 70%",
    });
  });

  return (
    <section
      id="home"
      className="container relative mx-auto min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8 md:gap-12"
    >
      <div className="left w-full lg:w-1/2 flex flex-col items-center md:items-start md:text-left gap-4">
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
        <h1 className="w-full text-3xl md:text-6xl leading-normal font-bold">
          Efren, a FullStack Software{" "}
          <span className="text-accent">Developer</span>
        </h1>
        <p className="text-base md:text-lg text-justify md:text-left">
          A dedicated developer passionate about creating modern, user-friendly,
          and optimized websites with robust functionalities. Committed to
          learning new trends and technologies to continuously improve skills.
          Aims to deliver high-quality web solutions tailored to your needs.
        </p>
        <div className="flex gap-x-4 h-20">
          <div className="icon">
            <FacebookRoundedIcon width={40} height={40} />
          </div>
          <div className="icon">
            <GithubRoundedIcon width={60} />
          </div>
          <div className="icon">
            <LinkedInRoundedIcon width={40} />
          </div>
          <div className="icon">
            <DiscordRoundedIcon width={40} />
          </div>
        </div>
      </div>

      <div className="right w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={HeroImage}
          alt="hero"
          className="max-w-full h-auto w-[280px] md:w-[420px] lg:w-[520px]"
        />
      </div>

      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-1" secondSphere="sphere-2" />
    </section>
  );
}
