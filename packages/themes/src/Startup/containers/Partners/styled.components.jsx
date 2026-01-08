import styled, {keyframes} from 'styled-components';
import Box from '@pagerland/common/src/components/Box';

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const SliderContainer = styled(Box)`
  width: 100%;
  overflow-x: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    width: 150px;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white 0%, transparent 100%);
  }
`;

export const SliderTrack = styled(Box)`
  display: flex;
  align-items: center;
  animation: ${slide} 45s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  ${SliderContainer}:active & {
    animation-play-state: paused;
  }
`;

export const LogoContainer = styled(Box)`
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const PartnerLink = styled.a`
  display: block;
  text-decoration: none;
`;

export const SliderWrapper = styled(Box)`
  position: relative;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  opacity: 0.5;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.6);
    opacity: 1;
    border-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    background: rgba(0, 0, 0, 0.1);
  }

  ${props => props.direction === 'left' && `
    left: -50px;
  `}

  ${props => props.direction === 'right' && `
    right: -50px;
  `}

  @media (max-width: 1200px) {
    ${props => props.direction === 'left' && `
      left: 5px;
    `}
    ${props => props.direction === 'right' && `
      right: 5px;
    `}
    background: rgba(255, 255, 255, 0.9);
  }
`;
