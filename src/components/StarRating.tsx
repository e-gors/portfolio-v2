import { useState } from "react";

interface StarRatingProps {
  value?: number;
  precision?: 0.5 | 1;
  max?: number;
  labels?: { [key: number]: string };
  onChange?: (value: number) => void;
  size?: number;
  className?: string;
}

const defaultLabels: { [key: number]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function StarRating({
  value: initialValue = 2,
  precision = 0.5,
  max = 5,
  labels = defaultLabels,
  onChange,
  size = 24,
  className = "",
}: StarRatingProps) {
  const [value, setValue] = useState<number>(initialValue);
  const [hover, setHover] = useState<number | null>(null);

  const displayValue = hover ?? value;

  const calculateValue = (e: React.MouseEvent<HTMLButtonElement>, starNumber: number) => {
    if (precision === 0.5) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      return x <= rect.width / 2 ? starNumber - 0.5 : starNumber;
    }
    return starNumber;
  };

  return (
    <div 
      className={`flex items-center gap-3 ${className}`}
      onMouseLeave={() => setHover(null)} 
    >
      <div className="flex gap-1 shrink-0">
        {Array.from({ length: max }).map((_, i) => {
          const starNumber = i + 1;
          const isFull = displayValue >= starNumber;
          const isHalf = precision === 0.5 && displayValue >= starNumber - 0.5 && displayValue < starNumber;

          return (
            <button
              key={i}
              type="button"
              onMouseMove={(e) => {
                const val = calculateValue(e, starNumber);
                if (val !== hover) setHover(val);
              }}
              onClick={(e) => {
                const val = calculateValue(e, starNumber);
                setValue(val);
                onChange?.(val);
              }}
              className="relative border-none p-0 m-0 bg-transparent focus:outline-none cursor-pointer"
              style={{ width: size, height: size }}
              aria-label={`Rate ${starNumber} stars`}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                className="text-gray-300 fill-current absolute inset-0 pointer-events-none"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>

              {(isFull || isHalf) && (
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: isHalf ? "50%" : "100%" }}
                >
                  <svg
                    width={size} 
                    height={size}
                    viewBox="0 0 24 24"
                    className="text-yellow-500 fill-current"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-gray-600 text-sm font-medium w-24 shrink-0">
        {displayValue > 0 ? labels[displayValue] : ""}
      </div>
    </div>
  );
}