"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
  {
    name: "Hundred Islands",
    position: [16.1961, 119.9866],
    description: "A famous island destination in Alaminos, Pangasinan.",
    link: "/destinations/hundred-islands",
  },
  {
    name: "Bolinao",
    position: [16.3894, 119.8944],
    description: "A coastal destination known for beaches, waterfalls, caves, and heritage.",
    link: "/destinations/bolinao",
  },
  {
    name: "Dagupan City",
    position: [16.0433, 120.3333],
    description: "A major city of Pangasinan and home of the famous Bangus Festival.",
    link: "/heritage/festival",
  },
  {
    name: "Lingayen",
    position: [16.0218, 120.2311],
    description: "The provincial capital of Pangasinan with important historical heritage.",
    link: "/heritage",
  },
];

const markerIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapSection() {
  return (
    <section className="map-section">

      <p className="section-label">
        DISCOVER PANGASINAN
      </p>

      <h2>
        Explore Pangasinan on the Map
      </h2>

      <p className="map-description">
        Explore important destinations and cultural places
        across Pangasinan.
      </p>

      <div className="map-container">

        <MapContainer
          center={[16.1, 120.2]}
          zoom={9}
          scrollWheelZoom={true}
          className="pangasinan-map"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={markerIcon}
            >
              <Popup>

                <div className="map-popup">

                  <h3>
                    {location.name}
                  </h3>

                  <p>
                    {location.description}
                  </p>

                  <a href={location.link}>
                    Discover More →
                  </a>

                </div>

              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>

    </section>
  );
}