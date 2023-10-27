import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import L from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function CountryMapSection({
    lat,
    lng,
}: {
    lat: number;
    lng: number;
}) {

    return (
        <section className="country-map-section mb-24 px-4">
            <div className="map-container h-36 w-full">
                <MapContainer
                    zoomControl={false}
                    doubleClickZoom={false}
                    closePopupOnClick={false}
                    dragging={false}
                    trackResize={false}
                    touchZoom={false}
                    scrollWheelZoom={false}
                    center={[lat, lng]}
                    zoom={3}
                    className="h-48"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    
                </MapContainer>
            </div>
        </section>
    );
}
