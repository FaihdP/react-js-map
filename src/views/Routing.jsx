import L from "leaflet";
import "leaflet-routing-machine";
import { useContext } from "react";
import { useMap } from "react-leaflet";
import { Context } from "../context/Context";

const Routing = () => {
  const { from, to } = useContext(Context)
  const map = useMap();

  L.Routing.control({
    waypoints: [
      L.latLng(from[0], from[1]),
      L.latLng(to[0], to[1])
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  }).addTo(map)

  return null
};

export default Routing;