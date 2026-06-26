import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import Logo from '../../components/Logo';
import data from '../../data';
import Background from '../About/Background';
import HeroSlideshow from './HeroSlideshow';

import AngleDown from '@pagerland/icons/src/line/AngleDown';

import {
  HeroWrapper,
  HeroLeft,
  HeroLeftInner,
  HeroRight,
  HeroTitle,
  HeroActions,
  ScrollCue,
} from './styled.components';

const Welcome = ({
  name,
  title,
  text,
  images,
  actions,
  TextProps,
  LogoProps,
}) => {
  const [mounted, setMounted] = useState(false);
  const [scrollCueHidden, setScrollCueHidden] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const timer = window.setTimeout(() => setShowHint(true), 8000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleScroll = () => {
      setScrollCueHidden(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollCueClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
    }
  };

  const animCls = (n) => (mounted ? `animate-fade-in-up animate-delay-${n}` : '');
  const hideStyle = mounted ? null : { opacity: 0, transform: 'translateY(20px)' };

  return (
    <Box name={name} as="section">
      <HeroWrapper>
        <Background />
        <HeroLeft>
          <HeroLeftInner>
            <Logo
              {...LogoProps}
              className={animCls(1)}
              style={{ ...(LogoProps.style || {}), ...(hideStyle || {}) }}
            />
            <HeroTitle
              dangerouslySetInnerHTML={title}
              className={animCls(2)}
              style={hideStyle}
            />
            <Typography
              {...TextProps}
              dangerouslySetInnerHTML={text}
              className={animCls(3)}
              style={hideStyle}
            />
            <HeroActions
              className={animCls(4)}
              style={hideStyle}
            >
              {actions.map(({ label, ...props }, key) => (
                <Button
                  {...props}
                  style={{ whiteSpace: 'nowrap' }}
                  px="28px"
                  key={key}
                >
                  {label}
                </Button>
              ))}
            </HeroActions>
          </HeroLeftInner>
        </HeroLeft>
        <HeroRight className={animCls(5)} style={hideStyle}>
          <HeroSlideshow images={images} />
        </HeroRight>
      </HeroWrapper>
      <ScrollCue
        href="#"
        onClick={handleScrollCueClick}
        aria-label="Scroller pour voir la suite"
        $cueHidden={scrollCueHidden}
      >
        <span className="hint" data-visible={showHint}>par ici</span>
        <span className="chevron">
          <AngleDown width={14} height={14} />
        </span>
      </ScrollCue>
    </Box>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  TextProps: PropTypes.object,
  LogoProps: PropTypes.object,
  title: PropTypes.object,
  text: PropTypes.object,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
};

Welcome.defaultProps = {
  LogoProps: {
    style: { width: 180, marginBottom: 80 },
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    fontSize: { _: '17px', lg: '20px' },
    lineHeight: 1.7,
    mb: 0,
  },
  ...data.welcome,
};

export default Welcome;
