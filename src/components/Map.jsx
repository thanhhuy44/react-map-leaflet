import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";

export default function Map() {
  return (
    <MapContainer
      style={{
        height: "800px",
        width: "800px",
        margin: "0 auto",
      }}
      center={[10.775636640442139, 106.67964840673227]}
      zoom={13}
      scrollWheelZoom={false}
      onClick={() => {}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker />
    </MapContainer>
  );
}
