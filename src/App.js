import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Navbar from './Components/Navbar';
import Map from './Components/Map';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    }
  }

  render() {

    return (
      <div>
        <Navbar />

        <div className="main-container col-xs-12 col-md-12 red">
          <div className="row">
            <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
          </div>


          <div className="row">

          </div>
        </div>
      </div>
    );
  }
}
