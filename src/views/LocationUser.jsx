import { useContext, useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { Context } from "../context/Context"

function LocationUser() {  
  const [position, setPosition] = useState(null);
  const { setFrom } = useContext(Context)
  const map = useMapEvents({
    dblclick() {
      map.locate()
    },
    locationfound({latlng}) {
      setPosition(latlng)
      setFrom([latlng.lat, latlng.lng])
      map.flyTo(latlng, 13)
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Latitud: {position.lat}, longitud: {position.lng} <br/>
        Esta es tu ubicación (puede ser aproximada).
      </Popup>
    </Marker>
  )
}

export default LocationUser
