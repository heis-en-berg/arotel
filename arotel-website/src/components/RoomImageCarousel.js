"use client";

import { useState } from "react";

export default function RoomImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const showPrev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <img
        src={images[index]}
        alt={`${alt} - photo ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white text-[11px] px-2.5 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
