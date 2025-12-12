import React from "react";
import HeroImage from "../images/hero-image.png";
import WavingHand from "../images/waving-hand.png";

export default function Hero() {
  return (
    <section className="container relative mx-auto min-h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8 md:gap-12">
      <div className="left w-full lg:w-1/2 flex flex-col items-center md:items-start md:text-left gap-4">
        <div className="flex items-center gap-2">
          <p>Hello,</p>
          <img src={WavingHand} alt="Waving Hand" />
          <p>I'm</p>
        </div>
        <h1 className="text-3xl md:text-5xl/normal font-bold text-primary">
          Efren, a FullStack Software <span className="color-yellow">Developer</span>
        </h1>
        <p className="text-lg text-gray-700">
          A dedicated developer passionate about creating modern, user-friendly,
          and optimized websites with robust functionalities. Committed to
          learning new trends and technologies to continuously improve skills.
          Aims to deliver high-quality web solutions tailored to your needs.
        </p>
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
