import React from "react";

interface StarRatingDisplayProps {
  value: number; // current rating, e.g., 3
  max?: number;  // total stars, default 5
  size?: number; // star size in px
  className?: string;
}

export default function StarRatingDisplay({
  value,
  max = 5,
  size = 24,
  className = "",
}: StarRatingDisplayProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`Rating: ${value} out of ${max}`}>
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= value;

        return (
          <svg
            key={index}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`transition-colors duration-200 ${
              isFilled ? "fill-gold-500" : "fill-gray-300"
            }`}
          >
            <path d="M12 2l2.91 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.09-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}
