import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import WeatherView from './weather/WeatherView';
import {API_KEY} from "../utils/consts";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      forecastData: [], 
      error: null,
      currentLoaded: false,
      forecastLoaded: false,
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };
  }

  async componentDidMount() {
    const lat = this.state.latitude;
    const lon = this.state.longitude;

    if (lat !== undefined) {
      await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              currentLoaded: true,
              data: result.data[0]
            });
          },
          (error) => {
            this.setState({
              currentLoaded: true,
              error
            });
          }
        );
      
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              forecastLoaded: true,
              forecastData: result.data
            });
          },
          (error) => {
            this.setState({
              forecastLoaded: true,
              error
            });
          }
        );
    }
  }
  
  render() {
    const {
      data,
      error,
      currentLoaded,
      forecastData,
      forecastLoaded
    } = this.state;
    
    return (
      <div>
        <WeatherView
          data={data}
          error={error}
          currentLoaded={currentLoaded}
          forecastData={forecastData}
          forecastLoaded={forecastLoaded}
        />
      </div>
    );
  }
};

App.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default App;
