"use client";

import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
  {
    name: "Hundred Islands",
    city: "Alaminos City",
    position: [16.1909, 119.9309],
    description:
      "A famous island destination featuring limestone islands, clear waters, and beautiful coastal scenery.",
    link: "/destinations/hundred-islands",
  },
  {
    name: "Bolinao",
    city: "Bolinao, Pangasinan",
    position: [16.3836, 119.8944],
    description:
      "A coastal destination known for beaches, waterfalls, caves, and cultural heritage.",
    link: "/destinations/bolinao",
  },
  {
    name: "Dagupan City",
    city: "Dagupan, Pangasinan",
    position: [16.0433, 120.3333],
    description:
      "Known for its bangus industry and the famous Bangus Festival.",
    link: "/heritage/festival",
  },
  {
    name: "Lingayen",
    city: "Lingayen, Pangasinan",
    position: [16.0218, 120.2317],
    description:
      "The provincial capital of Pangasinan and an important historical and cultural center.",
    link: "/heritage",
  },
];

const customIcon = new L.Icon({
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

export default function PangasinanMap() {
  return (
    <div className="pangasinan-map-wrapper">

      <MapContainer
        center={[16.05, 120.25]}
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
            icon={customIcon}
          >

            <Popup>

              <div className="map-popup">

                <h3>
                  {location.name}
                </h3>

                <p className="map-popup-location">
                  📍 {location.city}
                </p>

                <p>
                  {location.description}
                </p>

                <Link
                  href={location.link}
                  className="map-popup-link"
                >
                  Discover More →
                </Link>

              </div>

            </Popup>

          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}