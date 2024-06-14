import { useEffect, useState } from "react";

export const useHomePageData = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return {
    loading,
  };
};
