import { useFakeLoading } from "@/hooks/useFakeLoading";

export type UserDataType = typeof userData;

const userData = {
  name: "Amal Jose Alex",
  title: "Senior Frontend Engineer",
  location: "Kochi, Kerala",
  avatarUrl: "/avatar.jpg",
  projects: [
    "DendroWeb: A research project centered on violin photo recognition, employing skills in Computer Vision, HCI, and CNN.",
    "ShapeRoute: An entrepreneurial initiative for body photo tracking, developed with React Native.",
    "ArmyForLife: A volunteer-driven prayer app developed using React Native.",
  ],
};

export const useUserData = () => {
  const { loading } = useFakeLoading();
  return {
    loading,
    data: userData,
  };
};
