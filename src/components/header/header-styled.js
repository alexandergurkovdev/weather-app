import styled from 'styled-components';

export const HeaderWrapper = styled.div `
  display: flex;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-top: -3rem;
`;

export const HeaderItem = styled.div `
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;
  background: ${({white}) => (white ? '#fff' : 'var(--color-primaryLight)')};
  color: ${({white}) => (white ? 'var(--color-gray)' : 'var(--color-primary)')};
  font-size: ${({white}) => (white ? '1.4rem' : '1.6rem')};
  font-weight: ${({white}) => (white ? '400' : '500')};
  padding: 1.8rem 1rem;
  border-radius: ${({white}) => (white ? '2rem 0 0 0' : '0 2rem 0 2rem')};
`;

export const Icon = styled.img `
  margin-left: .5rem;
  display: block;
`;
