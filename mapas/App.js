import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Casa do café',
        description: 'Café quentinho...',
        latitude: -27.210671,
        longitude: -49.63627,
      },
      {
        id: 2,
        title: 'RocketSeat',
        description: 'Programação, empreendedorismo e mindset',
        latitude: -27.200671,
        longitude: -49.63627,
      },
      {
        id: 3,
        title: 'Casa do José',
        description: 'Jose, tá em casa?',
        latitude: -27.200671,
        longitude: -49.62627,
      },
    ],
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const {latitude, longitude} = this.state.places[0];
    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.mapView = map)}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
          onMapReady={this._mapReady}>
          {this.state.places.map(place => (
            <MapView.Marker
              ref={mark => (place.mark = mark)}
              title={place.title}
              description={place.description}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
          ))}
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          // eslint-disable-next-line prettier/prettier
          onMomentumScrollEnd={(e) => {
            // eslint-disable-next-line prettier/prettier
            const place = (e.nativeEvent.contentOffset.x > 0)
                ? Math.round(e.nativeEvent.contentOffset.x / width)
                : 0;
            //alert(place);
            const {latitude, longitude, mark} = this.state.places[place];

            this.mapView.animateToCoordinate(
              {
                latitude,
                longitude,
              },
              500,
            );

            setTimeout(() => {
              mark.showCallout();
            }, 500);
          }}>
          {this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
});
