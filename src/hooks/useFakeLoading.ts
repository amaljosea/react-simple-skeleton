import { useEffect, useState } from "react";

export const useFakeLoading = ({ delay = 3000 } = {}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay); // Simulate loading time
    return () => clearTimeout(timer);
  }, [delay]);

  return {
    loading,
  };
};
