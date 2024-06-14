import { useFakeLoading } from "@/hooks/useFakeLoading";

export type UserDataType = typeof userData;

const userData = {
  name: "Amal Jose Alex",
  title: "Senior Frontend Engineer",
  subTitle: "Experienced Senior Frontend Engineer Specializing in React",
  avatarUrl: "/avatar.jpg",
  projects: [
    {
      name: "DendroWeb",
      scope: "Freelancing",
      description: "Violin photo recognition",
      skills: ["Computer Vision", "HCI", "CNN"],
      link: "NA",
    },
    {
      name: "ShapeRoute",
      scope: "Entrepreneurship",
      description: "Violin matching",
      skills: ["React Native"],
      link: "https://shaperoute.com/",
    },
    {
      name: "ArmyForLife",
      scope: "Volunteering",
      description: "A prayer app",
      skills: ["React Native"],
      link: "https://play.google.com/store/apps/details?id=org.prolifearmy.spiritualadoption&hl=en_IN",
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
