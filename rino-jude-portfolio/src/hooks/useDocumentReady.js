import { useEffect, useState } from "react";

export function useDocumentReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const finish = () => {
      if (!cancelled) setReady(true);
    };

    const fonts = document.fonts?.ready;
    const fallback = window.setTimeout(finish, 1200);

    Promise.resolve(fonts)
      .catch(() => undefined)
      .finally(() => {
        window.clearTimeout(fallback);
        requestAnimationFrame(finish);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, []);

  return ready;
}
