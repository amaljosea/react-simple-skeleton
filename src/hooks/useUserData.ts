import { useFakeLoading } from "@/hooks/useFakeLoading";

const userData = {
  userName: "Amal Jose Alex",
  title: "Senior Frontend Engineer",
  subTitle: "Senior Frontend Engineer",
  projects: [
    {
      name: "DendroWeb",
      scope: "Fulltime",
      description: "Violin matching",
      skills: "DendroWeb",
      link: "DendroWeb",
    },
  ],
};

export const useUserData = () => {
  const { loading } = useFakeLoading();
  return {
    loading,
    data: userData,
  };
};
