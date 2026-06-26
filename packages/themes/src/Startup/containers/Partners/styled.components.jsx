import styled, { keyframes } from 'styled-components';
import Box from '@pagerland/common/src/components/Box';

const slide = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(calc(-100% / 3), 0, 0); }
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${slide} var(--marquee-duration, 60s) linear infinite;
  animation-direction: ${props => (props.$reverse ? 'reverse' : 'normal')};
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Marquee = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 80px,
    #000 calc(100% - 80px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 80px,
    #000 calc(100% - 80px),
    transparent 100%
  );

  &:hover ${Track},
  &:focus-within ${Track} {
    animation-play-state: paused;
  }
`;

export const LogoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 120px;
  margin: 0;
  padding: 0 120px 0 0;
  list-style: none;
  flex: 0 0 auto;
`;

export const MarqueeOuter = styled(Box)`
  position: relative;
`;

export const NudgeWrapper = styled.div`
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NudgeButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => (props.$side === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  z-index: 2;
  padding: 12px;
  background: transparent;
  border: none;
  color: #00303d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s ease, transform 0.15s ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: 4px;
  }

  &:active {
    transform: translateY(-50%) scale(0.9);
  }

  svg {
    display: block;
  }

  @media (min-width: 768px) {
    ${props => (props.$side === 'left' ? 'left: -40px;' : 'right: -40px;')}
  }
`;

export const LogoItem = styled.li`
  flex: 0 0 auto;

  img {
    display: block;
    height: 80px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.75;
    transition: filter 0.3s ease, opacity 0.3s ease;
  }

  a:hover img,
  a:focus-visible img {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

export const PartnerLink = styled.a`
  display: block;
  text-decoration: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;
