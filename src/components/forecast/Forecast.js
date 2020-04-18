import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import ErrorAlert from '../error-alert/ErrorAlert';
import Spinner from '../spinner';
import {valueTypeOf} from '../../utils/utils';
import {
  Icon, SlideWrapper, DateWrapper, TempWrapper, TempWrapperItem, Arrow
} from './forecast-styled';

let settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

class Forecast extends Component {
  render() {
    const {forecastData, forecastLoaded, error} = this.props;

    if (error) {
      return <ErrorAlert alertText={error.message} />;
    } else if (!forecastLoaded) {
      return <Spinner forecast="true" />;
    } else {
      return (
        <Slider {...settings}>
          {
            forecastData.map((item) => {
              return (
                <div key={item.wind_dir}>
                  <SlideWrapper>
                    <Icon src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt="weather-icon"/>
                    <DateWrapper>
                      {item.valid_date}
                    </DateWrapper>
                    <TempWrapper>
                      <TempWrapperItem>
                        {valueTypeOf(item.app_max_temp)}°C <Arrow src="https://alex-gurkov-dev.xyz/react/weather/img/arrow.svg" />  
                      </TempWrapperItem>
                      <TempWrapperItem>
                      {valueTypeOf(item.app_min_temp)}°C <Arrow rotate="true" src="https://alex-gurkov-dev.xyz/react/weather/img/arrow.svg" />
                      </TempWrapperItem>
                    </TempWrapper>
                  </SlideWrapper>
                </div>
              )
            })
          }
        </Slider>
      )
    }
  }
};

Forecast.defaultProps = {
  error: null,
};

Forecast.propTypes = {
  error: PropTypes.string,
  forecastData: PropTypes.array.isRequired,
  forecastLoaded: PropTypes.bool.isRequired
};

export default Forecast;
