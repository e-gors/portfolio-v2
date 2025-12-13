import React from "react";

interface TitleHeaderProps {
    title: string;
    number: string;
}

export default function TitleHeader(props: TitleHeaderProps) {
  return (
    <div className="flex wrap justify-between items-center">
      <h2 className="text-xl md:text-4xl font-semibold">{props.title}</h2>
      <div className="flex items-center gap-4">
        <span className="h-px md:h-1 w-15 sm:w-30 md:w-50 bg-white/40 rounded-xs"></span>
        <span className="w-auto h-auto p-4 md:p-6 bg-primary rounded-full font-bold text-4xl border-2 border-accent text-accent">
          {props.number}
        </span>
      </div>
    </div>
  );
}
