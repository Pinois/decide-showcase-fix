import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';

import Avatar from '../../components/Avatar';
import Logo from '../../components/Logo';
import data from '../../data';

import AngleDown from '@pagerland/icons/src/line/AngleDown';

import { ContainerWithBackground, RoundedImage, HeroTitle, ScrollCue } from './styled.components';
import Squares from './Squares';

const Welcome = ({
  name,
  title,
  text,
  img,
  actions,
  avatars,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TextProps,
  ActionButtonsProps,
  ImageWrapperProps,
  ImageProps,
  AvatarsProps,
  LogoProps,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const animCls = (n) => (mounted ? `animate-fade-in-up animate-delay-${n}` : '');
  const hideStyle = mounted ? null : { opacity: 0, transform: 'translateY(20px)' };

  return (
    <Box name={name} {...WrapperProps}>
      <ContainerWithBackground {...ContainerProps}>
        <Box {...CaptionProps}>
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
              <Button whiteSpace="nowrap" {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          {...ImageWrapperProps}
          className={animCls(5)}
          style={hideStyle}
        >
          {avatars.map((avatar, key) => (
            <Avatar {...avatar} {...AvatarsProps[key]} key={key} />
          ))}
          <Squares />
          <RoundedImage {...ImageProps} {...img} />
        </Box>
      </ContainerWithBackground>
      <ScrollCue href="#services" aria-label="Scroller pour voir la suite">
        <span className="chevron">
          <AngleDown width={14} height={14} />
        </span>
      </ScrollCue>
    </Box>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TextProps: PropTypes.object,
  ActionButtonsProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  ImageProps: PropTypes.object,
  LogoProps: PropTypes.object,
  AvatarsProps: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.object,
  text: PropTypes.object,
  img: PropTypes.object,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  avatars: PropTypes.arrayOf(PropTypes.object),
};

Welcome.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    position: 'relative',
    minHeight: { _: 'auto', lg: '100vh' },
    display: 'flex',
    alignItems: { _: 'center', lg: 'flex-start' },
    pt: { _: 4, lg: '12vh' },
    pb: 4,
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  CaptionProps: {
    my: {
      _: 30,
      lg: 0,
    },
    maxWidth: 560,
  },
  LogoProps: {
    style: { width: 180, marginBottom: 48 },
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    fontSize: { _: '16px', lg: '18px' },
    lineHeight: 1.7,
  },
  ActionButtonsProps: {
    mt: 5,
    display: 'flex',
    flexDirection: { _: 'column', md: 'row' },
    alignItems: { _: 'stretch', md: 'center' },
    flexWrap: 'nowrap',
    style: { whiteSpace: 'nowrap' },
    gap: 4,
  },
  ImageWrapperProps: {
    zIndex: 4,
    position: 'relative',
    my: {
      _: 90,
      lg: 0,
    },
  },
  ImageProps: {
    width: '100%',
    maxWidth: 540,
  },
  AvatarsProps: [
    {
      position: 'absolute',
      width: 70,
      height: 70,
      top: -65,
      left: 9,
    },
    {
      position: 'absolute',
      width: 70,
      height: 70,
      top: -80,
      right: 104,
    },
    {
      position: 'absolute',
      width: 70,
      height: 70,
      bottom: -72,
      right: 40,
    },
    {
      position: 'absolute',
      width: 70,
      height: 70,
      bottom: -90,
      left: 90,
    },
  ],
  ...data.welcome,
};

export default Welcome;
