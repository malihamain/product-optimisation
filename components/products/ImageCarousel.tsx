"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  if (!images.length) {
    return null;
  }

  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  const showArrows = images.length > 1;

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <div
        style={{ position: "relative", width: "100%", paddingBottom: "75%" }}
      >
        <Image
          src={current}
          alt={alt}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          style={{ objectFit: "cover", borderRadius: 8 }}
        />

        {showArrows && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                top: "50%",
                left: 8,
                transform: "translateY(-50%)",
                border: "none",
                borderRadius: "9999px",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                top: "50%",
                right: 8,
                transform: "translateY(-50%)",
                border: "none",
                borderRadius: "9999px",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 8,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {images.slice(0, 6).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              style={{
                border: i === index ? "2px solid #2563eb" : "1px solid #e5e7eb",
                padding: 0,
                borderRadius: 6,
                background: "transparent",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                width={72}
                height={54}
                style={{ display: "block", objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
