import React from "react";
import DoubleQuoteIcon from "@icons/DoubleQuoteIcon";
import Person from "@images/person.svg";
import StarRatingDisplay from "./StarRatingDisplay";

interface TestimonialCardProps {
    message: string;
    image?: string;
    name: string;
    date: string;
    rating: number;
    role?: string;
}
export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="testimonial-card relative bg-gray-800/20 p-4 rounded-xl hover:bg-gray-800/40 transition h-full flex flex-col">
      {/* Quote */}
      <DoubleQuoteIcon className="quote" width={32} height={32} />

      {/* Message */}
      <p className="text-base text-ellipsis line-clamp-6 flex-1">
        {props.message}
      </p>

      {/* Guest info: always at the bottom */}
      <div className="guest flex flex-wrap flex-row gap-2 items-center justify-between mt-4">
        <div className="left flex flex-wrap flex-row gap-2 items-center">
          <img
            src={props?.image ?? Person}
            alt="Person"
            className="w-10 h-10 rounded-full border border-accent p-1"
          />
          <div className="guest-name">
            <p className="text-base font-semibold">{props.name}</p>
            <span className="block text-xs text-gray-500">
              {props.date}
            </span>
          </div>
        </div>

        {/* Rating */}
        <StarRatingDisplay value={props?.rating ?? 5} />
      </div>
    </div>
  );
}

