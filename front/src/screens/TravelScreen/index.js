import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.5205,
  lng: 126.8876,
};

const positions = [
  {
    lat: 37.772,
    lng: -122.214,
  },
  {
    lat: 37.672,
    lng: -122.219,
  },
  {
    lat: 37.832,
    lng: -122.424,
  },
];

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB89A46XhoFozfegjbh7gnPzh9FiSQwRbo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center} // set senter
        zoom={15}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
          position={positions[0]}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
