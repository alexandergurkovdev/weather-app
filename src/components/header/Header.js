import React from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper, HeaderItem, Icon} from './header-styled';

const Header = ({city, country}) => {
  let today = new Date();
  let date = today.getDate() + '.' + ('0' + (+today.getMonth() + 1).toString()).slice(-2) + '.' + today.getFullYear() + ' | ' + today.getHours() + ':' + ('0' + today.getMinutes()).slice(-2);
  return (
    <HeaderWrapper>
      <HeaderItem white="true">
        {date}
      </HeaderItem>
      <HeaderItem>
        {city}, {country} <Icon src="https://alex-gurkov-dev.xyz/react/weather/img/placeholder.svg" alt=""/>
      </HeaderItem>
    </HeaderWrapper>
  )
};

Header.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Header;
