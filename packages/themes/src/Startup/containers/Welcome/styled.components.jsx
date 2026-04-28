import styled from 'styled-components';
import media from 'styled-media-query';
import { transparentize } from 'polished';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import { colors } from '../../styles';

export const ContainerWithBackground = styled(Container)`
  position: relative;

  ${media.greaterThan('large')`
    max-width: 1320px;
  `}

  ${media.greaterThan('huge')`
    max-width: 1440px;
  `}

  &::after {
    position: absolute;
    top: 0;
    left: 56%;
    z-index: -1;
    display: block;
    width: 100vw;
    height: 648px;
    content: '';
    background-color: ${colors.gray[6]};
    border-top-left-radius: 324px;
    border-bottom-left-radius: 324px;
  }
`;

export const RoundedImage = styled(Img)`
  border-radius: 128px 0;
`;

export const HeroTitle = styled.h1`
  font-size: 44px;
  line-height: 1.15;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0 0 32px 0;

  ${media.greaterThan('medium')`
    font-size: 56px;
  `}

  ${media.greaterThan('large')`
    font-size: 64px;
  `}

  .hl {
    background: linear-gradient(
      to top,
      ${transparentize(0.55, colors.accent)} 38%,
      transparent 38%
    );
    padding: 0 6px;
    border-radius: 2px;
    white-space: nowrap;
  }
`;

export const ScrollCue = styled.a`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${colors.gray[1]};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  .chevron {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid ${colors.gray[1]};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scrollBounce 2s ease-in-out infinite;
  }

  .chevron svg {
    fill: ${colors.gray[1]};
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .chevron {
      animation: none;
    }
  }
`;
