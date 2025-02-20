import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';

import Img from '@pagerland/common/src/components/Img';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';
import {RoundedImage} from '../About/styled.components';

const Services = ({
  name,
  title,
  text,
  cta,
  services,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  ServiceItemProps,
  ServiceIconProps,
  ServiceTitleProps,
  ServiceTextProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps} dangerouslySetInnerHTML={text} />
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {services.map((service, key) => (
          <Fade
            bottom
            cascade
            duration={600}
            delay={key * 100}
            key={key}
          >
            <Box {...ServiceItemProps}>
              <RoundedImage
                src={service.icon}
                {...ServiceIconProps}
              />
              <Typography {...ServiceTitleProps}>
                {service.title}
              </Typography>
              <Typography
                {...ServiceTextProps}
                dangerouslySetInnerHTML={service.text}
              />
              <Button
                {...CtaProps}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(service.buttonLink, '_blank');
                }}
              >
                {service.buttonText} →
              </Button>
            </Box>
          </Fade>
        ))}
      </Grid>
      {/*  <Fade top cascade duration={600}>
      <Button {...CtaProps} {...cta}>
          {cta.label}
        </Button> 
        </Fade> */}
    </Container>
  </Box>
);

Services.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of services grid wrapper
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Props of single service item
   * @See @pagerland/common/src/components/Box
   */
  ServiceItemProps: PropTypes.object,
  /**
   * Props of single service icon
   * @See @pagerland/common/src/components/Img
   */
  ServiceIconProps: PropTypes.object,
  /**
   * Props of single service title
   * @See @pagerland/common/src/components/Typography
   */
  ServiceTitleProps: PropTypes.object,
  /**
   * Props of single service text
   * @See @pagerland/common/src/components/Typography
   */
  ServiceTextProps: PropTypes.object,
  /**
   * Props of button below grid
   * @See @pagerland/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of services
   */
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.node,
      text: PropTypes.node,
    })
  ),
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
};

Services.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  CaptionProps: {
    mb: 5,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 3,
    textAlign: 'center',
  },
  TextProps: {
    color: 'gray.1',
    mb: 4,
  },
  GridProps: {
    gridTemplateColumns: {
      _: '2fr',
      lg: 'repeat(2, 2fr)',
    },
    gridGap: '40px',
    maxWidth: 1188,
    mx: 'auto',
    // mb: 4,
  },
  ServiceIconProps: {
    mx: 'auto',
    mb: 4,
    width: '100%',
  },
  ServiceTitleProps: {
    textAlign: 'center',
    as: 'h3',
    variant: 'h3',
    mb: 4,
    pl: 20,
    // p: 20,
    m: 2,
  },
  ServiceTextProps: {
    // maxWidth: 644,
    color: 'gray.1',
    // mb: 4,
    textAlign: 'justify',
    // p: 2,
  },
  CtaProps: {
    textAlign: 'center',
    mx: '2',
    p: '2',
    variant: 'default',
    as: 'a',
  },
  ...data.services,
};

export default Services;
