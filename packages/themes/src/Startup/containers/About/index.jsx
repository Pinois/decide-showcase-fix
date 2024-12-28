import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import data from '../../data';
import {RoundedImage} from './styled.components';

import Background from './Background';

const About = ({
  name,
  title,
  text,
  cta,
  img,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  CtaProps,
  ImageWrapperProps,
  ImageProps,
  ValuesProps,
  SecondContainerProps,
  SecondImageWrapperProps,
  SecondCaptionProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...ImageWrapperProps}>
        <Fade cascade duration={600}>
          <RoundedImage {...ImageProps} {...img} />
        </Fade>
      </Box>
      <Box {...CaptionProps}>
        <Typography {...TitleProps}>{title}</Typography>
        <Fade bottom cascade duration={600}>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
    </Container>
    <Container {...SecondContainerProps}>
      <Box {...SecondCaptionProps}>
        <Typography {...TitleProps}>Nos valeurs</Typography>
        <Fade bottom cascade duration={600}>
          <Typography {...TextProps}>
            <p>
              ● Reliance : En partant d'une vision transversale, nous
              visons à (re)créer du lien entre humains et avec leur
              environnement.
            </p>
            <p>
              ● Créativité : Nous valorisons la créativité dans notre
              démarche pédagogique afin de développer l&#39;imaginaire
              de nos publics et de faire émerger des futurs
              souhaitables.
            </p>
            <p>
              ● Sobriété : Nous cherchons le juste équilibre en
              questionnant les besoins et en conscientisant les
              limites.
            </p>
          </Typography>
        </Fade>
      </Box>
      <Box {...SecondImageWrapperProps}>
        <Fade cascade duration={600}>
          <RoundedImage
            {...ImageProps}
            {...data.about.secondImage}
            alt="DEC!DE"
          />
        </Fade>
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ImageWrapperProps: {
    position: 'relative',
    mb: {
      _: 60,
      lg: 0,
    },
  },
  ImageProps: {
    maxWidth: '100%',
    pl: 3,
    pr: 3,
  },
  CaptionProps: {
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    maxWidth: 644,
    ml: {
      _: 0,
      md: 20,
    },
    pl: 3,
    pr: 3,
    order: {
      _: 2,
      lg: 1,
    },
  },
  ValuesProps: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    mx: 'auto',
    px: 3,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 4,
  },
  TextProps: {
    textAlign: 'justify',
    color: 'gray.1',
    mb: 48,
  },
  CtaProps: {
    as: 'a',
    variant: 'primary',
  },
  ...data.about,
  SecondContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    mt: {
      _: 4,
      lg: 6,
    },
  },
  SecondImageWrapperProps: {
    position: 'relative',
    mb: {
      _: 60,
      lg: 0,
    },
    order: {
      _: 1,
      lg: 2,
    },
  },
  SecondCaptionProps: {
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    maxWidth: 644,
    ml: {
      _: 0,
      md: 20,
    },
    pl: 3,
    pr: 3,
    order: {
      _: 2,
      lg: 1,
    },
  },
};

export default About;
