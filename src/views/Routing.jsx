import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const control = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(33.52001088075479, 36.26829385757446),
      L.latLng(33.50546582848033, 36.29547681726967)
    ],
    show: false
  });

  return instance;
};

const Routing = createControlComponent(control);

export default Routing;