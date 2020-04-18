import React from "react";
import PropTypes from "prop-types";
import {geolocated} from "react-geolocated";
import App from "./App";
import Spinner from './spinner';
import styled from 'styled-components';

const DontLocation = styled.div `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: var(--color-main);
  font-size: 1.6rem;
  text-align: center;
`;

const Icon = styled.img `
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1rem;
  display: block;
`;

class GeoLocation extends React.Component {
  render() {
    if (!this.props.isGeolocationAvailable) {
      return (
        <DontLocation>
          <Icon src="https://alex-gurkov-dev.xyz/react/weather/img/warning.svg" alt="sorry icon" />
          Sorry, your browser does not support geolocation.
        </DontLocation>
      );
    } else if (!this.props.isGeolocationEnabled) {
      return (
        <DontLocation>
          <Icon src="https://alex-gurkov-dev.xyz/react/weather/img/sad.svg" alt="sorry icon" />
          Sorry you have banned the receipt of geolocation
        </DontLocation>
      );
    } else if (this.props.coords) {
      return (
        <App
          latitude={this.props.coords.latitude}
          longitude={this.props.coords.longitude}
        />
      );
    } else {
      return (
        <Spinner />
      );
    }
  }
}

GeoLocation.propTypes = {
  isGeolocationAvailable: PropTypes.bool.isRequired,
  isGeolocationEnabled: PropTypes.bool.isRequired,
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }),
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation);
