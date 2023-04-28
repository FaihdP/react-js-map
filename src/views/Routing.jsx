import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useContext } from "react";
import { Context } from "../context/Context";

const control = () => {
  const { from, to } = useContext(Context)
  console.log(from)
  console.log(to)
  const instance = L.Routing.control({
    waypoints: [
      from,
      to
    ],
    show: false
  });

  return instance;
};

const Routing = createControlComponent(control);

export default Routing;