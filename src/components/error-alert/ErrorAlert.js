import React from 'react';
import {ErrorWrapper, Icon} from './error-alert-styled';

const ErrorAlert = ({alertText}) => {
  if (alertText) {
    return (
      <ErrorWrapper>
        <Icon src="https://alex-gurkov-dev.xyz/react/weather/img/warning.svg" alt="error-icon" />
        {alertText}
      </ErrorWrapper>
    )
  }
}

export default ErrorAlert;
