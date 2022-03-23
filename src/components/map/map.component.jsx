import React from "react";

import "./map.styles.scss";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

class Map extends React.Component {
  state = {
    position: [51.505, -0.09],
  };

  render() {
    return (
      <div className="map">
        <MapContainer
          center={this.state.position}
          zoom={4}
          maxZoom={7}
          minZoom={3}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  }
}

export default Map;
