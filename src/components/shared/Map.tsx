import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { WAREHOUSES } from "./warehouse-info";
import axios from "axios";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
interface RouteResponse {
  type: string;
  bbox: number[];
  features: Feature[];
}

interface Feature {
  bbox: number[];
  type: string;
  properties: FeatureProperties;
  geometry: Geometry;
}

interface FeatureProperties {
  segments: Segment[];
  way_points: number[];
  summary: Summary;
}

interface Segment {
  distance: number;
  duration: number;
  steps: Step[];
}

interface Step {
  distance: number;
  duration: number;
  type: number;
  instruction: string;
  name: string;
  way_points: number[];
}

interface Summary {
  distance: number;
  duration: number;
}

interface Geometry {
  coordinates: number[][];
}
function Map({}) {
  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const warehouseCords1 = WAREHOUSES[0].coords.split(",");
  const warehouseCords2 = WAREHOUSES[1].coords.split(",");
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const { data: response } = await axios.get<RouteResponse>(
          `https://api.openrouteservice.org/v2/directions/driving-car`,
          {
            params: {
              api_key:
                "5b3ce3597851110001cf6248ecc3d1e1fcc44c7bb7ea504d6db30ffc",
              start: `${warehouseCords1[1]},${warehouseCords1[0]}`,
              end: `${warehouseCords2[1]},${warehouseCords2[0]}`,
            },
          }
        );

        const routeCoordinates = response.features[0].geometry.coordinates.map(
          (coord) => [coord[1], coord[0]] as LatLngExpression
        );
        setRoute(routeCoordinates);
      } catch (error) {
        console.error("Ошибка при получении маршрута:", error);
      }
    };

    fetchRoute();
  }, [warehouseCords1, warehouseCords2]);
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
      <Marker
        position={[Number(warehouseCords1[0]), Number(warehouseCords1[1])]}
      >
        <Popup>
          <div>
            <h1>{WAREHOUSES[0].name}</h1>
            <span>{WAREHOUSES[0].address}</span>
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[Number(warehouseCords2[0]), Number(warehouseCords2[1])]}
      >
        <Popup>
          <div>
            <h1>{WAREHOUSES[1].name}</h1>
            <span>{WAREHOUSES[1].address}</span>
          </div>
        </Popup>
      </Marker>
      {route.length > 0 && <Polyline positions={route} color="blue" />}
    </MapContainer>
  );
}
export default Map;
