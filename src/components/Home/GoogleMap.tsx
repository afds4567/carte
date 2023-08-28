import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { useContext, useEffect, useMemo, useState } from "react";

const mapIds: string = "a27d6aa473171658";

const GoogleMapView = () => {
  const { userLocation, getUserLocation, isLoading } =
    useContext(UserLocationContext);
  const [map, setMap] = useState<any>(null);

  const center = useMemo(() => {
    return userLocation
      ? {
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        }
      : { lat: 37, lng: 127 };
  }, [userLocation]);

  useEffect(() => {
    if (map && userLocation) {
      map.panTo({
        lat: userLocation.latitude,
        lng: userLocation.longitude,
      });
    }
    return () => {};
  }, [userLocation]);

  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      mapIds={[mapIds]}
    >
      <>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "50vh" }}
          zoom={10}
          center={center}
          options={{ mapId: mapIds, disableDefaultUI: true }}
          onLoad={(map) => setMap(map)}
        >
          <button
            style={{ position: "absolute", bottom: "20px" }}
            onClick={getUserLocation}
          >
            {isLoading ? "Loading..." : "현재 위치로 이동하기"}
          </button>
          <MarkerF position={center} />
        </GoogleMap>
      </>
    </LoadScriptNext>
  );
};

export default GoogleMapView;
