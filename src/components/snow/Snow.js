import React from 'react';
import SnowStorm from 'react-snowstorm';
import styled from 'styled-components';

const SnowWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  z-index: 1;
`;

const Snow = () => {
  return (
    <SnowWrapper>
      <SnowStorm
        followMouse={false}
      />
    </SnowWrapper>
  )
}

export default Snow;
