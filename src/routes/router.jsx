import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Map from '../views/Map'
import Routing from "../views/Routing"

export const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App>
        <Map/>
      </App>
    ,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/go/:latitude/:longitude",
    element: 
      <App>
        <Map>
          <Routing />
        </Map>
      </App>
    ,
  }
])