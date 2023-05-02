import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "./Header";
import LocationUser from "./LocationUser";
import Routing from "./Routing";
import ShareButton from "./ShareButton";

function Map() {
  const { from, to, setTo } = useContext(Context);
  let { latitude, longitude } = useParams();
  if (latitude && longitude) {
    latitude = parseFloat(latitude.replace("]", "."));
    longitude = parseFloat(longitude.replace("]", "."));
  }

  useEffect(() => {
    if (latitude && longitude) {
      setTo([latitude, longitude])
      alert("Para llevarte a la ubicación, debes ubicarte en el mapa, ¡Has doble click encima de él!")
    }
  }, [latitude, longitude, setTo]);

  if (!("geolocation" in navigator))
    return (
      <div>
        No se puede mostrar la localizacion ya que tu navegador no soporta esta
        opcion
      </div>
    );

  return (
    <>
      <Header />
      <MapContainer
        center={[51.511944009360356, -0.12499580403527717]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationUser />
        {latitude && longitude ? <Routing from={from} to={to} /> : null}
      </MapContainer>
      <ShareButton />
    </>
  );
}

export default Map;
