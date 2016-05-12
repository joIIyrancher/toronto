import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 43.644574899999995,
  lng: -79.3951887
};

const coords2 = {
  lat: 43.6445882,
  lng: -79.3952112
};

const coords3 = {
  lat: 43.6446652,
  lng: -79.39522169999998
};

const coords4 = {
  lat: 43.6446456,
  lng: -79.39521920000004
};


const Map = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'100vw'}
        height={'100vh'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={30}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords2.lat}
          lng={coords2.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords3.lat}
          lng={coords3.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />

        <Marker
          lat={coords4.lat}
          lng={coords4.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

module.exports = Map;