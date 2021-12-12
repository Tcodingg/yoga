import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
const position = [43.653225, -79.383186];

const Map = () => {
   return (
      <div id="map">
         <MapContainer
            className="leaflet-container"
            center={position}
            zoom={14}
            // scrollWheelZoom={false}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </MapContainer>
      </div>
   );
};

export default Map;
