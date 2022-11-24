import { useEffect, useState } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function MapMarker() {
  const [position, setPosition] = useState({
    lat: 10.775636640442139,
    lng: 106.67964840673227,
  });
  const map = useMap();
  const mapPosition = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      console.log(e.latlng);
    },
  });
  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      console.log(e.latlng);
    });
  }, []);

  return (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default MapMarker;
