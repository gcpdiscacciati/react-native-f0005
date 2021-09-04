import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
// import { Container } from './styles';

const Directions = (destination, origin, onReady) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyDQz6p8PoKZBDbIp906B0DDGfIaXEhRU8E"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default Directions;
