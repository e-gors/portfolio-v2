import React from "react";
import HeroImage from "@images/hero-image.png";
import WavingHand from "@images/waving-hand.png";
import GithubRoundedIcon from "@icons/GithubRoundedIcon";
import FacebookRoundedIcon from "@icons/FacebookRoundedIcon";
import LinkedInRoundedIcon from "@icons/LinkedInRoundedIcon";
import DiscordRoundedIcon from "@icons/DiscordRoundedIcon";

export default function Hero() {
  return (
    <section className="container relative mx-auto min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8 md:gap-12">
      <div className="left w-full lg:w-1/2 flex flex-col items-center md:items-start md:text-left gap-4">
        <div className="w-full flex items-center gap-2">
          <p className="text-base md:text-lg">Hello,</p>
          <img src={WavingHand} alt="Waving Hand" className="w-6 md:w-10" />
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
          <FacebookRoundedIcon width={40} />
          <GithubRoundedIcon width={60} />
          <LinkedInRoundedIcon width={40} />
          <DiscordRoundedIcon width={40} />
        </div>
        <div className="flex gap-x-4">
          <button className="btn-outline">Download CV</button>
          <button className="btn-outline">Hire Me</button>
        </div>
      </div>

      <div className="right w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={HeroImage}
          alt="hero"
          className="max-w-full h-auto w-[280px] md:w-[420px] lg:w-[520px]"
        />
      </div>
    </section>
  );
}
