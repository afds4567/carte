import { LoadScript, GoogleMap } from "@react-google-maps/api";

const GoogleMapView = () => {
  const mapIds: string = "a27d6aa473171658";
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      mapIds={[mapIds]}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "50vh" }}
        zoom={10}
        center={{ lat: 51.5074, lng: 0.1278 }}
        options={{ mapId: mapIds }}
      />
    </LoadScript>
  );
};

export default GoogleMapView;
