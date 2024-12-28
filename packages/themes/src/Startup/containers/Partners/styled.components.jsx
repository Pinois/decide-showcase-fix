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
  overflow: hidden;
  position: relative;
  
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
`; 