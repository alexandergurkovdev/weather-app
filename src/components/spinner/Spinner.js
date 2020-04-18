import React from 'react';
import styled from 'styled-components';
import './spinner-styled.css';

const SpinnerText = styled.div `
  margin-top: 1rem;
  color: var(--color-primary);
  font-size: 1.4rem;
`;

const Spinner = ({weather, forecast}) => {
  return (
    <div className={forecast ? 'spinner-static' : 'spinner'}>
      <div className="spinner-loader">
        <div className="loadingio-spinner-spin-qajbj2zsizs"><div className="ldio-3gkt3etki2t">
      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      </div></div>
      </div>
      <SpinnerText>
        {weather ? 'Getting weather...' : forecast ? 'Getting forecast...' : 'Getting location data...'}
      </SpinnerText>
    </div>
  )
};

export default Spinner;
