import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';

import Img from '@pagerland/common/src/components/Img';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';

const ServiceImage = styled(Box)`
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Services = ({
  name,
  title,
  text,
  cta,
  services,
  bottomText,
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
  ServiceDurationProps,
  BottomTextProps,
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
      <Box display={{ _: 'block', lg: 'none' }}>
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
                <ServiceImage
                  {...ServiceIconProps}
                  backgroundImage={`url(${service.icon})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
                <Typography {...ServiceTitleProps}>
                  {service.title}
                </Typography>
                {service.duration && (
                  <Typography {...ServiceDurationProps}>
                    {service.duration}
                  </Typography>
                )}
                <Typography
                  {...ServiceTextProps}
                  dangerouslySetInnerHTML={service.text}
                />
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
      
      <Box display={{ _: 'none', lg: 'block' }}>
        <Grid {...GridProps}>
          {services.slice(0, 3).map((service, key) => (
            <Fade
              bottom
              cascade
              duration={600}
              delay={key * 100}
              key={key}
            >
              <Box {...ServiceItemProps}>
                <ServiceImage
                  {...ServiceIconProps}
                  backgroundImage={`url(${service.icon})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
                <Typography {...ServiceTitleProps}>
                  {service.title}
                </Typography>
                {service.duration && (
                  <Typography {...ServiceDurationProps}>
                    {service.duration}
                  </Typography>
                )}
                <Typography
                  {...ServiceTextProps}
                  dangerouslySetInnerHTML={service.text}
                />
              </Box>
            </Fade>
          ))}
        </Grid>
        
        <Grid 
          gridTemplateColumns="repeat(2, 1fr)"
          gridGap="40px"
          maxWidth={800}
          mx="auto"
          mb={4}
          justifyItems="center"
        >
          {services.slice(3).map((service, key) => (
            <Fade
              bottom
              cascade
              duration={600}
              delay={(key + 3) * 100}
              key={key + 3}
            >
              <Box {...ServiceItemProps}>
                <ServiceImage
                  {...ServiceIconProps}
                  backgroundImage={`url(${service.icon})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
                <Typography {...ServiceTitleProps}>
                  {service.title}
                </Typography>
                {service.duration && (
                  <Typography {...ServiceDurationProps}>
                    {service.duration}
                  </Typography>
                )}
                <Typography
                  {...ServiceTextProps}
                  dangerouslySetInnerHTML={service.text}
                />
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
      {bottomText && (
        <Box {...BottomTextProps}>
          <Typography variant="body1" color="gray.1">
            {bottomText}
          </Typography>
        </Box>
      )}
      {cta && (
        <Fade top cascade duration={600}>
          <Button {...CtaProps} {...cta}>
            {cta.label}
          </Button>
        </Fade>
      )}
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
    variant: 'body1',
    color: 'gray.1',
    mb: 4,
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '40px',
    maxWidth: 1200,
    mx: 'auto',
    mb: 4,
    justifyItems: 'center',
  },
  ServiceIconProps: {
    mx: 'auto',
    mb: 3,
    width: '100%',
    height: 200,
    borderRadius: '12px',
    maxWidth: 350,
  },
  ServiceTitleProps: {
    textAlign: 'center',
    as: 'h3',
    variant: 'h4',
    mb: 2,
    color: 'black',
  },
  ServiceDurationProps: {
    textAlign: 'center',
    variant: 'body2',
    color: 'gray.1',
    backgroundColor: 'gray.5',
    borderRadius: '16px',
    px: 3,
    py: 1,
    mb: 3,
    display: 'inline-block',
    mx: 'auto',
    fontWeight: 'normal',
  },
  ServiceTextProps: {
    color: 'gray.1',
    textAlign: 'center',
    variant: 'body2',
  },
  BottomTextProps: {
    textAlign: 'center',
    mt: 4,
    mb: 3,
  },
  CtaProps: {
    textAlign: 'center',
    mx: 'auto',
    variant: 'primary',
    as: 'a',
  },
  ...data.services,
};

export default Services;
