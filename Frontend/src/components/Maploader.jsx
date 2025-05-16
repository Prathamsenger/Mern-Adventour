import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const MapLoader = ({ children }) => {
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      {children}
    </LoadScript>
  );
};

export default MapLoader;
