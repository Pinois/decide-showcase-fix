import styled, { keyframes } from 'styled-components';
import Box from '@pagerland/common/src/components/Box';

const slide = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${slide} 35s linear infinite;
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
  gap: 80px;
  margin: 0 40px 0 0;
  padding: 0;
  list-style: none;
  flex: 0 0 auto;
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
