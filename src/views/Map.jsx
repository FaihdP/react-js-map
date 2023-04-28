import Header from "./Header";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import LocationUser from "./LocationUser";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useEffect } from "react";

function Map({ children }) {
  
  if (!("geolocation" in navigator)) return <div>No se puede mostrar la localizacion ya que tu navegador no soporta esta opcion</div>

  const { to, setTo } = useContext(Context)
  const { latitude, longitude } = useParams()
  
  useEffect(() => {
    if (latitude && longitude) setTo(L.latLng(latitude, longitude))
    console.log(to)
  }, [])

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
        { children }
      </MapContainer>
    </>
  );
}

export default Map;
