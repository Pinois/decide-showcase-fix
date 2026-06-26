import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize, darken } from 'polished';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';

import Check from '@pagerland/icons/src/line/Check';
import Lightbulb from '@pagerland/icons/src/line/Lightbulb';

import { track } from '@pagerland/common/src/utils/track';

import data from '../../data';
import { colors } from '../../styles';
import { RoundedImage } from './styled.components';

import Background from './Background';

const ServiceCardStyled = styled(Box)`
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px ${transparentize(0.78, colors.primary)};
  }
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${transparentize(0.82, '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;

  svg {
    fill: ${darken(0.28, colors.secondary)};
  }
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  text-align: left;
  color: white;
  font-size: 18px;
  line-height: 1.5;
`;

const CheckCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${transparentize(0.82, '#ffffff')};

  svg {
    fill: ${colors.primary};
  }
`;

const ExpertiseRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
  color: ${colors.gray[1]};
  font-size: 18px;
  line-height: 1.6;
`;

const ExpertiseCheckCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${transparentize(0.92, colors.primary)};

  svg {
    fill: ${colors.primary};
  }
`;

const HighlightCallout = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
  padding: 20px 24px;
  background-color: ${transparentize(0.92, colors.accent)};
  border-radius: 24px;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

const HighlightIconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${transparentize(0.78, colors.accent)};

  svg {
    fill: ${colors.accent};
  }
`;

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
  ServiceTitleProps,
  ServiceDescriptionProps,
  ServiceFeatureProps,
  ExpertiseContainerProps,
  ExpertiseCaptionProps,
  ExpertiseImageProps,
  ExpertiseImageWrapperProps,
  ExpertiseItemProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps} className="animate-fade-in-up">
        <Typography {...TitleProps} dangerouslySetInnerHTML={{ __html: title }} />
        <Typography {...TextProps} dangerouslySetInnerHTML={text} />
      </Box>

      <Grid {...ServicesGridProps}>
        {services.map((service, key) => {
          const Icon = service.icon;
          return (
            <ServiceCardStyled
              {...ServiceCardProps}
              key={key}
              className={`animate-fade-in-up animate-delay-${key + 1}`}
            >
              <Box minHeight={{ _: 'auto', md: 290 }}>
                <IconCircle>
                  {Icon && <Icon width={28} height={28} />}
                </IconCircle>
                <Typography {...ServiceTitleProps}>{service.title}</Typography>
                <Typography {...ServiceDescriptionProps}>{service.description}</Typography>
              </Box>
              <Box mt={3}>
                {service.features.map((feature, index) => (
                  <FeatureRow key={index}>
                    <CheckCircle>
                      <Check width={14} height={14} />
                    </CheckCircle>
                    <span>{feature}</span>
                  </FeatureRow>
                ))}
              </Box>
            </ServiceCardStyled>
          );
        })}
      </Grid>

      <Grid {...ExpertiseContainerProps} className="animate-fade-in-up">
        <Box {...ExpertiseCaptionProps}>
          <Typography {...TitleProps}>{expertise.title}</Typography>
          <Box>
            {expertise.items && expertise.items.map((item, index) => (
              <ExpertiseRow key={index}>
                <ExpertiseCheckCircle>
                  <Check width={16} height={16} />
                </ExpertiseCheckCircle>
                <span>{item}</span>
              </ExpertiseRow>
            ))}
          </Box>
          {expertise.highlightText && (
            <HighlightCallout>
              <HighlightIconCircle>
                <Lightbulb width={20} height={20} />
              </HighlightIconCircle>
              <span>{expertise.highlightText}</span>
            </HighlightCallout>
          )}
        </Box>
        <Box {...ExpertiseImageWrapperProps}>
          <RoundedImage {...ExpertiseImageProps} {...expertise.image} />
        </Box>
      </Grid>

      <Box textAlign="center" mt="80px" mb="40px">
        <Button
          {...CtaProps}
          {...cta}
          onClick={() => {
            if (cta.href && cta.href.includes('calendly.com')) {
              track('cta_calendly_click', { source: 'about_cta' });
            }
          }}
        >
          {cta.label}
        </Button>
      </Box>
    </Container>
  </Box>
);

About.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  ImageProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  ValuesProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  CtaProps: PropTypes.object,
  img: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
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
    gridGap: '32px',
    mb: '120px',
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
  ServiceTitleProps: {
    as: 'h3',
    variant: 'h3',
    color: 'white',
    mb: 3,
  },
  ServiceDescriptionProps: {
    variant: 'body1',
    color: 'gray.6',
    mb: 3,
    lineHeight: 1.6,
  },
  ServiceFeatureProps: {
    variant: 'body2',
    color: 'white',
    mb: 2,
    textAlign: 'left',
  },
  ExpertiseItemProps: {
    variant: 'body1',
    color: 'gray.1',
    mb: 2,
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    lineHeight: 1.6,
  },
  ExpertiseContainerProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: '1fr 1fr',
    },
    gridGap: '48px',
    alignItems: 'center',
    mt: '80px',
    mb: '40px',
  },
  ExpertiseCaptionProps: {
    textAlign: {
      _: 'center',
      lg: 'left',
    },
  },
  ExpertiseImageWrapperProps: {
    display: 'flex',
    justifyContent: 'center',
  },
  ExpertiseImageProps: {
    maxWidth: '100%',
    width: '100%',
  },
  CtaProps: {
    as: 'a',
    variant: 'primary',
  },
  ...data.about,
};

export default About;
