import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { transparentize } from 'polished';
import { colors } from '../../styles';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  ${media.greaterThan('large')`
    flex-direction: row;
    min-height: 100vh;
  `}
`;

export const HeroLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 56px 24px;

  ${media.greaterThan('medium')`
    padding: 80px 48px;
  `}

  ${media.greaterThan('large')`
    width: 50%;
    padding: 12vh 64px 64px 80px;
    align-items: flex-start;
  `}

  ${media.greaterThan('huge')`
    padding: 14vh 80px 80px 120px;
  `}
`;

export const HeroLeftInner = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  ${media.greaterThan('large')`
    margin: 0;
  `}
`;

export const HeroRight = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;

  ${media.greaterThan('large')`
    width: 50%;
    height: auto;
  `}
`;

export const SlideshowFrame = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 800ms ease;
  will-change: opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
`;

export const ProgressTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: ${transparentize(0.92, colors.primary)};
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
`;

const heroProgress = css`
  @keyframes heroProgress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;

export const ProgressFill = styled.div`
  ${heroProgress};
  height: 100%;
  width: 100%;
  background: ${transparentize(0.15, colors.accent)};
  transform-origin: left center;
  transform: scaleX(0);
  animation-name: heroProgress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeroActions = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  @media (min-width: 768px) and (max-width: 1169px) {
    flex-direction: row;
    align-items: center;
    width: max-content;
    max-width: 100%;
  }

  @media (min-width: 1700px) {
    flex-direction: row;
    align-items: center;
    width: max-content;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 44px;
  line-height: 1.15;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0 0 56px 0;

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
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${colors.gray[2]};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.65;
  z-index: 10;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${media.greaterThan('large')`
    left: 25%;
  `}

  ${props =>
    props.$cueHidden &&
    css`
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, 16px);
    `}

  &:hover {
    opacity: 1;
  }

  .hint {
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .hint[data-visible='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  .chevron {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid ${colors.gray[2]};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scrollBounce 2s ease-in-out infinite;
  }

  .chevron svg {
    fill: ${colors.gray[2]};
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
