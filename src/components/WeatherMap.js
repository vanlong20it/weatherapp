import React from "react";
import styled from 'styled-components'

const Border = styled.div`
  border:solid green 1px;
  height:500px;
`;
const WeatherMap = ({ lat, lon }) => {
  const url =
    'https://embed.windy.com/embed2.html?lat='+lat+'&lon='+lon+'&detailLat='+lat+'&detailLon='+lon+'&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1';
  return (
    <React.Fragment>
      <Border>
        <iframe
        title="map"
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
      ></iframe>
      </Border>
    </React.Fragment>
  );
};

export default WeatherMap;
