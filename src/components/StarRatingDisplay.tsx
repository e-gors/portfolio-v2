interface StarRatingDisplayProps {
  value: number; // e.g., 4.5
  max?: number;
  size?: number;
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
      {/* 1. Define the gradient once for the component */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half-star-gradient">
            <stop offset="50%" stopColor="#EAB308" /> {/* gold-500 */}
            <stop offset="50%" stopColor="#D1D5DB" /> {/* gray-300 */}
          </linearGradient>
        </defs>
      </svg>

      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        
        // Determine fill type
        let fillClass = "fill-gray-300";
        let style = {};

        if (value >= starValue) {
          // Fully filled
          fillClass = "fill-gold-500";
        } else if (value > index && value < starValue) {
          // Half filled (e.g., value is 4.5 and starValue is 5)
          style = { fill: "url(#half-star-gradient)" };
          fillClass = ""; 
        }

        return (
          <svg
            key={index}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            style={style}
            className={`transition-colors duration-200 ${fillClass}`}
          >
            <path d="M12 2l2.91 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.09-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}