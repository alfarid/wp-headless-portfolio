"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    // 1. Initialize AOS
    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      // Refresh AOS to bind scroll events to all dynamically rendered elements
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    })();

    // 2. Mouse tracking for Spotlight Cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".spotlight-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        // Optimize: only calculate for cards that are relatively close to the cursor (within 350px)
        const isNear =
          e.clientX >= rect.left - 350 &&
          e.clientX <= rect.right + 350 &&
          e.clientY >= rect.top - 350 &&
          e.clientY <= rect.bottom + 350;

        if (isNear) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
