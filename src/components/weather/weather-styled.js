import styled from 'styled-components';

export const Bg = styled.img`
  width: 100%;
  display: block;
  z-index: -1;
  position: relative;
`;

export const WeatherWrapper = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

export const WeatherContent = styled.div `
  padding: 1.8rem 2rem 4rem;
  background: #fff;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 2rem 2rem 0 0;
  margin-top: -3rem;
  z-index: 1;
  position: relative;
`;

export const WeatherContentRow = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: ${({margin0}) => (margin0 ? '0' : '4rem')};
  margin-top: ${({mt2}) => (mt2 ? '2rem' : '0')};
`;

export const WeatherContentCol = styled.div `
  text-align: center;
  width: 33.333%;
  margin-bottom: ${({mb}) => (mb ? '-1.2rem' : '0')};
`;

export const MainIcon = styled.img `
  width: 6rem;
`;

export const MainText = styled.div `
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
`;

export const MainTemp = styled.div `
  font-size: 6.4rem;
  letter-spacing: -0.05em;
  line-height: 1;
  color: #000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;
`;

export const MainTempCelcius = styled.div `
  font-size: ${({small}) => (small ? '1.6rem' : '2.4rem')};
  color: ${({small}) => (small ? 'var(--color-gray)' : 'var(--color-grayDark)')};
  letter-spacing: normal;
  line-height: 1.2;
  margin: ${({small}) => (small ? '0' : '.5rem 0 0 .5rem')};
`;

export const WeatherIcon = styled.img `
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.2rem;
`;

export const WeatherItemText = styled.div `
  color: var(--color-main);
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: .4rem;
  text-transform: ${({capitalize}) => (capitalize ? 'capitalize' : 'none')};
`;

export const WeatherItemLabel = styled.div `
  color: var(--color-gray);
  font-weight: 500;
  font-size: 1rem;
`;
