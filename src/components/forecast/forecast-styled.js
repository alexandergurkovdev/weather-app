import styled from 'styled-components';

export const Icon = styled.img `
  display: block;
  margin: 0 auto;
  width: 8rem;
`;

export const SlideWrapper= styled.div `
  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  max-width: 85%;
  margin: auto;
  padding: 1rem;
  background: #fff;
`;

export const DateWrapper= styled.div `
  color: var(--color-main);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.05em;
  font-size: 1.6rem;
  margin-bottom: .4rem;
  text-align: center;
`;

export const TempWrapper= styled.div `
  color: var(--color-main);
  font-size: 1rem;
  color: var(--color-gray);
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TempWrapperItem= styled.div `
  align-items: baseline;
  justify-content: center;
  display: flex;
  padding: 0 .3rem;
`;

export const Arrow = styled.img `
  transform: ${({rotate}) => (rotate ? 'rotate(180deg)' : 'none')};
  margin-left: .2rem;
`;
