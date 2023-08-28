import { Coordinates, Position } from "@/types/position";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface UserLocationContextInterface {
  userLocation: Coordinates | null;
  setUserLocation: Dispatch<SetStateAction<Coordinates | null>>;
  getUserLocation: () => void;
  isLoading: boolean;
}

const defaultContextValue = {
  userLocation: null,
  setUserLocation: () => {},
  getUserLocation: () => {},
  isLoading: false,
};

export const UserLocationContext =
  createContext<UserLocationContextInterface>(defaultContextValue);

const UserLocationProvider = ({ children }: { children: ReactNode }) => {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      window.alert("현재 위치롤 이동하겠씁니디ㅏ!");
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        showPosition,
        (error) => {
          console.log(error);
          setIsLoading(false);
        },
        { enableHighAccuracy: false }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = (position: Position) => {
    setUserLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setIsLoading(false);
  };

  return (
    <UserLocationContext.Provider
      value={{ userLocation, setUserLocation, getUserLocation, isLoading }}
    >
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
