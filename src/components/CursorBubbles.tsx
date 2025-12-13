import { useEffect, useRef } from "react";

export default function CursorBubbles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bubble = document.createElement("div");
      bubble.className = "cursor-bubble";

    //   generate random width and height between 10 and 30px
      const size = Math.random() * 20 + 10; // 10–30px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

    //   get the position of the mouse
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;

      container.appendChild(bubble);

      // Trigger animation
      requestAnimationFrame(() => {
        bubble.style.transform = `
          translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)
          scale(0)
        `;
        bubble.style.opacity = "0";
      });

      // Cleanup
      setTimeout(() => {
        bubble.remove();
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="cursor-bubbles-container" />;
}
