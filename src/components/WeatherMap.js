import React from "react";
const WeatherMap = ({ lat, lon }) => {
  const url =
    'https://embed.windy.com/embed2.html?lat='+lat+'&lon='+lon+'&detailLat='+lat+'&detailLon='+lon+'&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1';
  return (
    <React.Fragment>
      <iframe
        title="map"
        width="100%"
        height="450"
        src={url}
        frameBorder="0"
      ></iframe>
    </React.Fragment>
  );
};

export default WeatherMap;
