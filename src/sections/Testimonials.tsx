import TitleHeader from "@components/TitleHeader";
import GradientSphere from "@components/GradientSphere";
import TestimonialCard from "@components/TestimonialCard";
import { testimonials } from "@constants/constants";
import CustomButton from "@components/CustomButton";
import type { TestimonialProps } from "@/types/types";
import BaseModal from "@/components/BaseModal";
import { useState } from "react";
import ProfileImageUpload from "@/components/ProfileImageUpload";
import DefaultPerson from "@images/boy.png";
import StarRating from "@/components/StarRating";

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleProfileChange = (file: File | null) => {
    console.log("Selected file:", file);
  };

  return (
    <>
      {/* modal */}
      <BaseModal
        isOpen={open}
        title="What can you say about me?"
        type="default"
        onClose={() => setOpen(false)}
        buttons={[
          {
            label: "Cancel",
            variant: "secondary",
            onClick: () => setOpen(false),
          },
          {
            label: "Submit",
            variant: "primary",
            onClick: () => {
              console.log("Submit clicked");
              setOpen(false);
            },
          },
        ]}
      >
        <form className="max-w-2xl mx-auto space-y-12">
          <div className="border-b border-white/10 pb-12">
            {/* Header Section */}
            <div className="text-center sm:text-left">
              <h2 className="text-base/7 font-semibold text-white">
                Personal Information
              </h2>
              <p className="mt-1 text-sm/6 text-gray-400">
                I truly value your thoughts and feedback.
              </p>
            </div>

            {/* Profile Section */}
            <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-start sm:gap-x-8">
              <ProfileImageUpload
                onChange={handleProfileChange}
                placeholder={DefaultPerson}
              />
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-white">Profile Photo</p>
                <p className="text-xs text-gray-500">
                  JPG, GIF or PNG. 5MB max.
                </p>
              </div>
            </div>

            {/* Input Grid */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Rating Section */}
              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-white mb-2">
                  Your Rating
                </label>
                <StarRating
                  value={rating}
                  onChange={setRating}
                  size={32} 
                />
              </div>

              {/* Feedback Section */}
              <div className="col-span-full">
                <label
                  htmlFor="feedback"
                  className="block text-sm/6 font-medium text-white"
                >
                  Feedback
                </label>
                <div className="mt-2">
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows={4}
                    placeholder="What did you think about the experience?"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </BaseModal>

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
              We love our client and our clients loved us, see all feedback or
              you can add feedback if we are collaborating recently. Your
              feedback is important for me.
            </h3>
            <div className="w-screen flex flex-wrap flex-row mt-3 gap-x-4">
              <CustomButton variant="contained" onClick={() => setOpen(true)}>
                Write a Feedback
              </CustomButton>
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
    </>
  );
}
