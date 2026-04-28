import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import { Link } from 'react-scroll';
import { smoothLinkProps } from '@pagerland/common/src/utils';

import Logo from '../../components/Logo';
import data from '../../data';
import Background from '../About/Background';

import AngleDown from '@pagerland/icons/src/line/AngleDown';

import {
  HeroWrapper,
  HeroLeft,
  HeroLeftInner,
  HeroRight,
  HeroImage,
  HeroTitle,
  ScrollCue,
} from './styled.components';

const Welcome = ({
  name,
  title,
  text,
  img,
  actions,
  TextProps,
  ActionButtonsProps,
  LogoProps,
}) => {
  const [mounted, setMounted] = useState(false);
  const [scrollCueHidden, setScrollCueHidden] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleScroll = () => {
      setScrollCueHidden(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Box
              {...ActionButtonsProps}
              className={animCls(4)}
              style={{ ...(ActionButtonsProps.style || {}), ...(hideStyle || {}) }}
            >
              {actions.map(({ label, ...props }, key) => (
                <Button
                  {...props}
                  style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
                  px="28px"
                  key={key}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </HeroLeftInner>
        </HeroLeft>
        <HeroRight className={animCls(5)} style={hideStyle}>
          <HeroImage src={img.src} srcSet={img.srcSet} alt="" />
        </HeroRight>
      </HeroWrapper>
      <ScrollCue
        as={Link}
        to="services"
        {...smoothLinkProps}
        aria-label="Scroller pour voir la suite"
        $cueHidden={scrollCueHidden}
      >
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
  ActionButtonsProps: PropTypes.object,
  LogoProps: PropTypes.object,
  title: PropTypes.object,
  text: PropTypes.object,
  img: PropTypes.object,
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
  ActionButtonsProps: {
    mt: '96px',
    display: 'flex',
    flexDirection: { _: 'column', md: 'row' },
    alignItems: { _: 'stretch', md: 'center' },
    flexWrap: 'nowrap',
    style: { whiteSpace: 'nowrap', width: 'max-content', maxWidth: '100%' },
    gap: 4,
  },
  ...data.welcome,
};

export default Welcome;
