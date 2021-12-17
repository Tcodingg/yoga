import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

const Map = () => {
   const position = [43.653225, -79.383186];
   return (
      <div className="map section" id="map">
         <MapContainer
            className="leaflet-container"
            center={position}
            zoom={15}
            scrollWheelZoom={false}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
               <Popup>
                  123 Main St. Toronto Ontario <br />
                  Come visit us.
               </Popup>
            </Marker>
         </MapContainer>
      </div>
   );
};

export default Map;
