import { useEffect, useState } from "react";

const userData = {
  userName: "Amal Jose Alex",
  title: "Senior Frontend Engineer",
  subTitle: "Senior Frontend Engineer",
  projects: [{}],
};

export const useUserData = () => {
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
