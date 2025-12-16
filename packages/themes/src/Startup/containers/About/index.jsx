import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';

import data from '../../data';
import {RoundedImage} from './styled.components';

import Background from './Background';

const About = ({
  name,
  title,
  text,
  services,
  expertise,
  cta,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ServicesGridProps,
  ServiceCardProps,
  ServiceIconProps,
  ServiceTitleProps,
  ServiceDescriptionProps,
  ServiceFeatureProps,
  ExpertiseContainerProps,
  ExpertiseCaptionProps,
  ExpertiseImageProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps} className="animate-fade-in-up">
        <Typography {...TitleProps}>{title}</Typography>
        <Typography {...TextProps} dangerouslySetInnerHTML={text} />
      </Box>

      <Grid {...ServicesGridProps}>
        {services.map((service, key) => (
          <Box {...ServiceCardProps} key={key} className={`animate-fade-in-up animate-delay-${key + 1}`}>
            <Box>
              <Typography {...ServiceIconProps}>{service.icon}</Typography>
              <Typography {...ServiceTitleProps}>{service.title}</Typography>
              <Typography {...ServiceDescriptionProps}>{service.description}</Typography>
            </Box>
            <Box mt={3}>
              {service.features.map((feature, index) => (
                <Typography {...ServiceFeatureProps} key={index}>
                  ✔️ {feature}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>

      <Container {...ExpertiseContainerProps} className="animate-fade-in-up">
        <Box {...ExpertiseCaptionProps}>
          <Typography {...TitleProps}>{expertise.title}</Typography>
          <Typography {...TextProps}>{expertise.text}</Typography>
          <Typography {...ServiceFeatureProps} mt={3} dangerouslySetInnerHTML={{__html: expertise.highlight}} />
        </Box>
        <Box>
          <RoundedImage {...ExpertiseImageProps} {...expertise.image} />
        </Box>
      </Container>
      
      <Box textAlign="center" mt={5}>
        <Button {...CtaProps} {...cta}>
          {cta.label}
        </Button>
      </Box>
    </Container>
  </Box>
);

About.propTypes = {
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
   * Wrapper for image
   * @See @pagerland/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Welcome image props
   * @See @pagerland/common/src/components/Img
   */
  ImageProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  ValuesProps: PropTypes.object,
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of button below grid
   * @See @pagerland/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Img details
   */
  img: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  SecondContainerProps: PropTypes.object,
  SecondImageWrapperProps: PropTypes.object,
  SecondCaptionProps: PropTypes.object,
};

About.defaultProps = {
  WrapperProps: {
    overflow: {
      _: 'hidden',
      sm: 'visible',
    },
    position: 'relative',
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
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    mb: 4,
  },
  ServicesGridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '40px',
    maxWidth: 1200,
    mx: 'auto',
    mb: 5,
    alignItems: 'stretch',
  },
  ServiceCardProps: {
    textAlign: 'center',
    p: {
      _: 24,
      md: 5,
    },
    borderRadius: {
      _: 'large',
      md: 'xxxLarge',
    },
    backgroundColor: 'secondary',
    boxShadow: 'secondary',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  ServiceIconProps: {
    fontSize: 48,
    mb: 3,
  },
  ServiceTitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'white',
    mb: 3,
  },
  ServiceDescriptionProps: {
    variant: 'body1',
    color: 'gray.6',
    mb: 4,
    lineHeight: 1.6,
  },
  ServiceFeatureProps: {
    variant: 'body1',
    color: 'white',
    mb: 2,
    textAlign: 'left',
  },
  ExpertiseContainerProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    mt: 5,
    mb: 4,
  },
  ExpertiseCaptionProps: {
    maxWidth: 600,
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    mb: {
      _: 4,
      lg: 0,
    },
  },
  ExpertiseImageProps: {
    maxWidth: 400,
    width: '100%',
  },
  CtaProps: {
    as: 'a',
    variant: 'primary',
  },
  ...data.about,
};

export default About;
