import styled from 'styled-components';
import { ModalSizes } from './Modal';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const wrapperModifiers = {};

type WrapperProps = {
  size: ModalSizes;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div``;
