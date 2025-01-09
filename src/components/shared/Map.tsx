import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map({}) {
  return (
    <MapContainer
      center={[47.218577, 38.897185]}
      zoom={13}
      scrollWheelZoom={true}
      className={`w-[1000px] h-[600px]`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
export default Map;
