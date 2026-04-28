import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import Button from '@pagerland/common/src/components/Button';

import Clock from '@pagerland/icons/src/line/Clock';
import UsersAlt from '@pagerland/icons/src/line/UsersAlt';

import data from '../../data';
import { colors } from '../../styles';
import Background from '../About/Background';

const ServiceImage = styled(Box)``;

const ServiceCard = styled(Box)`
  background-color: white;
  border-radius: 64px;
  overflow: hidden;
  box-shadow: 0 8px 24px ${transparentize(0.92, colors.primary)};
  border: 1px solid ${colors.gray[5]};
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px ${transparentize(0.85, colors.primary)};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.shades.secondary[3]},
      0 14px 32px ${transparentize(0.85, colors.primary)};
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.accent};
  margin: 0 0 24px 0;
  letter-spacing: 0.3px;
  text-align: center;
`;

const CardFooter = styled.button`
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 24px;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.shades.primary[1]};

    span.arrow {
      transform: translateX(4px);
    }
  }

  span.arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 48, 61, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 24px;
  max-width: 920px;
  width: 100%;
  max-height: 92vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.25s ease;

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${colors.primary};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 48, 61, 0.15);
  z-index: 1;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: white;
  }
`;

const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: ${(props) => props.objectPosition || 'center'};
  border-radius: 24px 24px 0 0;
`;

const ModalBody = styled.div`
  padding: 40px 48px;
`;

const ModalTitle = styled.h3`
  margin: 0 0 16px 0;
  color: ${colors.primary};
  font-size: 28px;
`;

const ModalText = styled.p`
  margin: 0 0 16px 0;
  color: ${colors.gray[1]};
  line-height: 1.6;
  font-size: 16px;
`;

const ModalInfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0;
`;

const ModalInfoChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background-color: ${transparentize(0.9, colors.primary)};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.primary};

  svg {
    fill: ${colors.primary};
  }
`;

const ModalSectionTitle = styled.h4`
  margin: 24px 0 8px 0;
  font-size: 13px;
  font-weight: 700;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const ModalNote = styled.p`
  margin: 0 0 12px 0;
  color: ${colors.gray[1]};
  font-size: 14px;
  line-height: 1.6;
`;

const ModalLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: ${colors.primary};
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-bottom: 1px solid ${transparentize(0.7, colors.primary)};
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: ${colors.primary};
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

const ModalCtaPrimary = styled.a`
  flex: 1 1 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  background-color: ${colors.primary};
  color: white;
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${colors.shades.primary[1]};
    transform: translateY(-1px);
  }
`;

const ModalCtaSecondary = styled.a`
  flex: 1 1 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  background-color: transparent;
  color: ${colors.primary};
  border: 1.5px solid ${colors.gray[5]};
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${colors.primary};
    background-color: ${transparentize(0.95, colors.primary)};
  }
`;

const Services = ({
  name,
  title,
  subtitle,
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
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [openIndex]);

  const openService = openIndex !== null ? services[openIndex] : null;

  return (
    <Box name={name} {...WrapperProps}>
      <Background />
      <Container {...ContainerProps}>
        <Box {...CaptionProps} className="animate-fade-in-up">
          <Typography {...TitleProps} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Typography {...TextProps} dangerouslySetInnerHTML={text} />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          style={{ gap: '32px' }}
          mb={5}
        >
          {services.map((service, key) => (
            <ServiceCard
              {...ServiceItemProps}
              key={key}
              className={`animate-fade-in-up animate-delay-${Math.min(key + 1, 5)}`}
              width={{ _: '100%', md: 'calc(50% - 16px)', lg: 'calc(33.333% - 22px)' }}
              onClick={() => setOpenIndex(key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenIndex(key);
                }
              }}
            >
              <ServiceImage
                {...ServiceIconProps}
                backgroundImage={`url(${service.icon})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              />
              <Box px="40px" pt="40px" pb="40px" display="flex" flexDirection="column" flex={1}>
                <Typography {...ServiceTitleProps}>
                  {service.title}
                </Typography>
                <Typography
                  {...ServiceTextProps}
                  dangerouslySetInnerHTML={service.text}
                />
                <CardFooter
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(key);
                  }}
                >
                  En savoir plus
                  <span className="arrow">→</span>
                </CardFooter>
              </Box>
            </ServiceCard>
          ))}
        </Box>
        {bottomText && (
          <Box {...BottomTextProps}>
            <Typography variant="body1" color="gray.1">
              {bottomText}
            </Typography>
          </Box>
        )}
        {cta && (
          <Button {...CtaProps} {...cta} className="animate-fade-in-up">
            {cta.label}
          </Button>
        )}
      </Container>

      {openService && (
        <ModalOverlay onClick={() => setOpenIndex(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Fermer"
            >
              ×
            </ModalCloseButton>
            <ModalImage
              src={openService.icon}
              alt={openService.title}
              objectPosition={openService.details && openService.details.imagePosition}
            />
            <ModalBody>
              <ModalTitle>{openService.title}</ModalTitle>
              {openService.details && openService.details.longDescription ? (
                <ModalText>{openService.details.longDescription}</ModalText>
              ) : (
                <ModalText dangerouslySetInnerHTML={openService.text} />
              )}

              {openService.details && (openService.details.duration || openService.details.participants) && (
                <ModalInfoGrid>
                  {openService.details.duration && (
                    <ModalInfoChip>
                      <Clock width={16} height={16} />
                      {openService.details.duration}
                    </ModalInfoChip>
                  )}
                  {openService.details.participants && (
                    <ModalInfoChip>
                      <UsersAlt width={16} height={16} />
                      {openService.details.participants}
                    </ModalInfoChip>
                  )}
                </ModalInfoGrid>
              )}

              {openService.details && openService.details.partnership && (
                <>
                  <ModalSectionTitle>Partenariat</ModalSectionTitle>
                  <ModalNote>{openService.details.partnership}</ModalNote>
                </>
              )}

              {openService.details && openService.details.format && (
                <>
                  <ModalSectionTitle>Format</ModalSectionTitle>
                  <ModalNote>{openService.details.format}</ModalNote>
                </>
              )}

              {openService.details && openService.details.logistics && (
                <>
                  <ModalSectionTitle>Logistique</ModalSectionTitle>
                  <ModalNote>{openService.details.logistics}</ModalNote>
                </>
              )}

              {openService.details && openService.details.link && (
                <ModalLink
                  href={openService.details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  En savoir plus sur le site officiel →
                </ModalLink>
              )}

              <ModalActions>
                <ModalCtaPrimary
                  href={`mailto:contact@decideetvous.com?subject=${encodeURIComponent(
                    `Demande de réservation : ${openService.title}`
                  )}`}
                >
                  Réserver cette formation →
                </ModalCtaPrimary>
                <ModalCtaSecondary
                  href="https://github.com/Pinois/files/raw/main/Catalogue-DECIDE-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger la brochure ↓
                </ModalCtaSecondary>
              </ModalActions>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Box>
  );
};

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
    position: 'relative',
    overflow: 'hidden',
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
    mb: 1,
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
    mb: 4,
    justifyItems: 'center',
  },
  ServiceIconProps: {
    width: '100%',
    height: 320,
  },
  ServiceTitleProps: {
    textAlign: 'center',
    as: 'h3',
    variant: 'h4',
    mb: 2,
    mt: 0,
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
