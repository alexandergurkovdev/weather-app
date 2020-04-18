import styled from 'styled-components';

export const ErrorWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--color-danger);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #000;
  width: 100vw;
`;

export const Icon = styled.img `
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`;