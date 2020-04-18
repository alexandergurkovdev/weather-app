import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorAlert from '../error-alert/ErrorAlert';
import Forecast from '../forecast/Forecast';
import Header from '../header/Header';
import Snow from '../snow/Snow';
import Rain from '../rain/Rain';
import {getSunrise, getSunset} from 'sunrise-sunset-js';
import {timeConvert, valueTypeOf} from '../../utils/utils';
import {
  Bg, WeatherWrapper, WeatherContent, WeatherContentRow,
  WeatherContentCol, MainIcon, MainText, MainTemp, 
  MainTempCelcius, WeatherIcon, WeatherItemText, 
  WeatherItemLabel
} from './weather-styled';

const WeatherView = ({data, error, currentLoaded, forecastData, forecastLoaded}) => {
  let today = new Date();
  let time = today.getHours() + ':' + today.getMinutes();

  const sunrise = getSunrise(data.lat, data.lon);
  const sunset = getSunset(data.lat, data.lon);

  let sunriseTime = ('0' + sunrise.getHours()).slice(-2) + ':' + ('0' + sunrise.getMinutes()).slice(-2);
  let sunsetTime = ('0' + sunset.getHours()).slice(-2) + ':' + ('0' + sunset.getMinutes()).slice(-2);

  

  if (error) {
    return <ErrorAlert alertText={error.message} />;
  } else if (!currentLoaded) {
    return <Spinner weather />;
  } else {
    
    return (
      <WeatherWrapper>
        {
          data.weather.description.indexOf('snow') !== -1 ? <Snow /> : null
        }
        {
          data.weather.description.indexOf('rain') !== -1 ? <Rain /> : null
        }
        <Bg
          src={
            timeConvert(time) < timeConvert(sunsetTime) && timeConvert(time) > timeConvert(sunriseTime) ? "https://alex-gurkov-dev.xyz/react/weather/img/day.png"
            : "https://alex-gurkov-dev.xyz/react/weather/img/night.png"
          }
          alt=""
        />
        <WeatherContent>
          <Header city={data.city_name} country={data.country_code} />
          <WeatherContentRow mt2="true">
            <WeatherContentCol>
              <MainIcon src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt=""/>
              <MainText>
                {data.weather.description}
              </MainText>
            </WeatherContentCol>
            <WeatherContentCol>
              <MainTemp>
                {valueTypeOf(data.temp)}
                <MainTempCelcius>
                  °C
                </MainTempCelcius>
              </MainTemp>
            </WeatherContentCol>
            <WeatherContentCol mb>
              <MainTemp>
                {valueTypeOf(data.app_temp)}
                <MainTempCelcius>
                  °C
                </MainTempCelcius>
              </MainTemp>
              <WeatherItemLabel>
                Feels like
              </WeatherItemLabel>
            </WeatherContentCol>
          </WeatherContentRow>
          <WeatherContentRow>
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/humidity.svg" />
              <WeatherItemText>
                {data.rh}%
              </WeatherItemText>
              <WeatherItemLabel>
                Humidity
              </WeatherItemLabel>
            </WeatherContentCol>
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/barometer.svg" />
              <WeatherItemText>
                {valueTypeOf(data.pres * 0.750062)}mmHg
              </WeatherItemText>
              <WeatherItemLabel>
                Pressure
              </WeatherItemLabel>
            </WeatherContentCol>
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/wind.svg" />
              <WeatherItemText>
                {valueTypeOf(data.wind_spd / 1.60934)}km/h
              </WeatherItemText>
              <WeatherItemLabel>
                Wind
              </WeatherItemLabel>
            </WeatherContentCol>
          </WeatherContentRow>
          <WeatherContentRow margin0="true">
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/sunrise.svg" />
              <WeatherItemText>
                {sunriseTime}AM
              </WeatherItemText>
              <WeatherItemLabel>
                Sunrise
              </WeatherItemLabel>
            </WeatherContentCol>
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/sunset.svg" />
              <WeatherItemText>
                {sunsetTime}PM
              </WeatherItemText>
              <WeatherItemLabel>
                Sunset
              </WeatherItemLabel>
            </WeatherContentCol>
            <WeatherContentCol>
              <WeatherIcon src="https://alex-gurkov-dev.xyz/react/weather/img/rooster.svg" />
              <WeatherItemText capitalize>
                {data.wind_cdir_full}
              </WeatherItemText>
              <WeatherItemLabel>
                Wind direction
              </WeatherItemLabel>
            </WeatherContentCol>
          </WeatherContentRow>
          <Forecast
            error={error}
            forecastData={forecastData}
            forecastLoaded={forecastLoaded}
          />
        </WeatherContent>
      </WeatherWrapper>
    );
  }
};

WeatherView.defaultProps = {
  error: null,
};

WeatherView.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string,
  currentLoaded: PropTypes.bool.isRequired,
  forecastData: PropTypes.array.isRequired,
  forecastLoaded: PropTypes.bool.isRequired
};

export default WeatherView;
