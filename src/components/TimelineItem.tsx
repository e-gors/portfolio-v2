interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  className?: string;
}

export const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  className
}: TimelineItemProps) => (
  <div className={`relative pl-8 mb-8 ${className}`}>
    <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-accent"></div>
    <div className="border-l-2 border-accent absolute left-2 top-4 h-full"></div>
    <div className="bg-gray-800/20 p-4 rounded-xl hover:bg-gray-800/40 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <span className="text-sm text-gray-400">{subtitle}</span>}
      <span className="block text-xs text-gray-500">{date}</span>
      {description && <p className="mt-2 text-gray-300">{description}</p>}
    </div>
  </div>
);
