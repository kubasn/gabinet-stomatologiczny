import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Location = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);
  const [title, setTitle] = useState("Wildfires");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div name="location">
      {loading ? (
        <p>loading</p>
      ) : (
        <Map>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_bootstrapURLKeys,
            }}
            defaultCenter={{ lat: 50.04, lng: 19.94 }}
            defaultZoom={16}
          ></GoogleMapReact>
        </Map>
      )}
    </div>
  );
};

const Map = styled.div`
  width: 100%;
  margin: 0 0;
  height: 50vh;
  position: relative;
`;

export default Location;
