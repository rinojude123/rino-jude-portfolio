import { useEffect, useState } from "react";

export function useFinePointer() {
  const [fine, setFine] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(hover: none)").matches;
  });

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const hover = window.matchMedia("(hover: hover)");
    const update = () => setFine(pointer.matches && hover.matches);
    update();
    pointer.addEventListener("change", update);
    hover.addEventListener("change", update);
    return () => {
      pointer.removeEventListener("change", update);
      hover.removeEventListener("change", update);
    };
  }, []);

  return fine;
}
