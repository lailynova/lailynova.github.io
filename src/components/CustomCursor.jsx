import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const trailCursor = useRef(null);

  useEffect(() => {
    const pos = { x: 0, y: 0 };      // Real mouse position
    const trail = { x: 0, y: 0 };    // Follower position

    const speed = 0.1; // trailing delay

    const updatePosition = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const animate = () => {
      // lerp (linear interpolation)
      trail.x += (pos.x - trail.x) * speed;
      trail.y += (pos.y - trail.y) * speed;

      if (mainCursor.current)
        mainCursor.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

      if (trailCursor.current)
        trailCursor.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updatePosition);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={mainCursor}
        className="fixed z-[9999] top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{ transform: "translate3d(0,0,0)", transition: "transform 0.05s linear" }}
      />
      {/* Trailing cursor */}
      <div
        ref={trailCursor}
        className="fixed z-[9998] top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none mix-blend-difference opacity-50"
        style={{ transform: "translate3d(0,0,0)" }}
      />
    </>
  );
};

export default CustomCursor;
