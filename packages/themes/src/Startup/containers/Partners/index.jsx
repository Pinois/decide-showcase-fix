import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import { track } from '@pagerland/common/src/utils/track';
import data from '../../data';
import {
  Marquee,
  MarqueeOuter,
  Track,
  LogoList,
  LogoItem,
  PartnerLink,
  NudgeWrapper,
  NudgeButton,
} from './styled.components';

const NUDGE_STEP = 220;
const TRACK_COPIES = 3;
const SPEED_PX_PER_SECOND = 30;

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Partners = ({
  name,
  title,
  partners,
  list,
  reverse,
  WrapperProps,
  ContainerProps,
  TitleProps,
}) => {
  const [nudgeOffset, setNudgeOffset] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);
  const [duration, setDuration] = useState(60);
  const trackRef = useRef(null);

  const handleNudge = (direction) => {
    setSkipTransition(false);
    setNudgeOffset((prev) => prev + direction * NUDGE_STEP);
  };

  useLayoutEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;
    const copyWidth = trackEl.scrollWidth / TRACK_COPIES;
    if (copyWidth <= 0) return;
    setDuration(copyWidth / SPEED_PX_PER_SECOND);
  }, [partners.length]);

  useLayoutEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;
    const copyWidth = trackEl.scrollWidth / TRACK_COPIES;
    if (copyWidth <= 0) return;
    if (Math.abs(nudgeOffset) >= copyWidth) {
      const wrapped = nudgeOffset - Math.sign(nudgeOffset) * copyWidth;
      setSkipTransition(true);
      requestAnimationFrame(() => {
        setNudgeOffset(wrapped);
        requestAnimationFrame(() => setSkipTransition(false));
      });
    }
  }, [nudgeOffset]);

  const renderSet = (copyIdx) => (
    <LogoList key={`copy-${copyIdx}`} aria-hidden={copyIdx > 0 || undefined}>
      {partners.map((partner, i) => (
        <LogoItem key={`copy${copyIdx}-${i}`}>
          <PartnerLink
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={copyIdx > 0 ? -1 : 0}
            onClick={() => track('partner_click', { partner: partner.name, list })}
          >
            <img src={partner.logo} alt={copyIdx > 0 ? '' : partner.name} />
          </PartnerLink>
        </LogoItem>
      ))}
    </LogoList>
  );

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        {title && (
          <Typography {...TitleProps} dangerouslySetInnerHTML={{ __html: title }} />
        )}
        <MarqueeOuter>
          <NudgeButton
            type="button"
            $side="left"
            aria-label="Faire défiler vers la gauche"
            onClick={() => handleNudge(1)}
          >
            <ChevronLeft />
          </NudgeButton>
          <Marquee role="region" aria-label="Nos partenaires">
            <NudgeWrapper
              style={{
                transform: `translateX(${nudgeOffset}px)`,
                transition: skipTransition ? 'none' : undefined,
              }}
            >
              <Track
                ref={trackRef}
                $reverse={reverse}
                style={{ '--marquee-duration': `${duration}s` }}
              >
                {Array.from({ length: TRACK_COPIES }).map((_, idx) => renderSet(idx))}
              </Track>
            </NudgeWrapper>
          </Marquee>
          <NudgeButton
            type="button"
            $side="right"
            aria-label="Faire défiler vers la droite"
            onClick={() => handleNudge(-1)}
          >
            <ChevronRight />
          </NudgeButton>
        </MarqueeOuter>
      </Container>
    </Box>
  );
};

Partners.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  title: PropTypes.node,
  list: PropTypes.oneOf(['main', 'secondary']),
  reverse: PropTypes.bool,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

Partners.defaultProps = {
  list: 'main',
  reverse: false,
  WrapperProps: {
    py: {
      _: 100,
      lg: 100,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 5,
  },
  ...data.partners,
};

export default Partners;
