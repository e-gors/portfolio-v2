import React from "react";
import TitleHeader from "@components/TitleHeader";
import GradientSphere from "@components/GradientSphere";
import DoubleQuoteIcon from "@icons/DoubleQuoteIcon";
import StarRatingDisplay from "@components/StarRatingDisplay";
import TestimonialCard from "@components/TestimonialCard";
import { testimonials } from "@constants/constants";
import type { TestimonialProps } from "@types/types";
import CustomButton from "@components/CustomButton";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-screen relative mx-auto px-4 md:px-10 lg:px-20 py-12 gap-8 md:gap-12 z-1"
    >
      <TitleHeader title="Testimonials" number="04" />

      <div className="content grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="testimonial-card p-0 lg:p-3">
          <h2 className="text-2xl font-bold mb-1">
            Hear what they say about me?
          </h2>
          <h3 className="text-base font-semibold">
            We love our client and our clients loved us, see all feedback or you
            can add feedback if we are collaborating recently. Your feedback is
            important for me.
          </h3>
          <div className="flex flex-wrap flex-row mt-3 gap-2">
            <CustomButton variant="contained">Write a Feedback</CustomButton>
            <CustomButton variant="outlined">Edit My Feedback</CustomButton>
          </div>
        </div>
        {testimonials.map((testimonial: TestimonialProps, index: number) => (
          <TestimonialCard
            key={index}
            message={testimonial.message}
            name={testimonial.name}
            rating={testimonial.rating}
            role={testimonial.role}
            date={testimonial.date}
          />
        ))}
      </div>

      {/* Gradient Spheres */}
      <GradientSphere firstSphere="sphere-3" secondSphere="sphere-4" />
    </section>
  );
}
