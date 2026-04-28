import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import MapPin from '@pagerland/icons/src/line/MapPin';
import UsersAlt from '@pagerland/icons/src/line/UsersAlt';
import FocusTarget from '@pagerland/icons/src/line/FocusTarget';

import data from '../../data';
import { colors } from '../../styles';

const SessionCard = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 64px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 48, 61, 0.06);
  border: 1px solid ${colors.gray[5]};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px ${transparentize(0.78, colors.primary)};
  }
`;

const CardHeader = styled(Box)`
  background-color: ${transparentize(0.82, colors.accent)};
  padding: 28px 24px;
  text-align: center;
`;

const HeaderDays = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.3;
`;

const HeaderYear = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${transparentize(0.3, colors.accent)};
  letter-spacing: 2px;
  margin-top: 2px;
`;

const CardBody = styled(Box)`
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InfoLine = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const InfoIconWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${transparentize(0.85, colors.primary)};
  flex-shrink: 0;

  svg {
    fill: ${colors.primary};
  }
`;

const InfoText = styled(Typography)`
  margin: 0;
  line-height: 32px;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.accent};
  margin: 0 0 24px 0;
  letter-spacing: 0.3px;
`;

const ContactNote = styled(Box)`
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
  color: ${colors.gray[1]};
`;

const ContactLink = styled.a`
  color: ${colors.primary};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid ${transparentize(0.7, colors.primary)};
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: ${colors.primary};
  }
`;

const CardFooter = styled.a`
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  background-color: transparent;
  transition: color 0.2s ease;
  cursor: pointer;

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

const Agenda = ({
  name,
  title,
  subtitle,
  text,
  sessions,
  sessionCtaLabel,
  sessionCtaHref,
  info,
  contactNote,
  contactLabel,
  contactHref,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
}) => (
  <Box name={name} {...WrapperProps}>
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
        style={{ gap: '28px' }}
      >
        {sessions
          .filter((session) => {
            if (!session.endDate) return true;
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return new Date(session.endDate) >= today;
          })
          .map((session, index) => (
          <SessionCard
            key={index}
            className={`animate-fade-in-up animate-delay-${index + 1}`}
            width={{ _: '100%', md: 320, lg: 340 }}
          >
            <CardHeader>
              <HeaderDays>
                {session.days} {session.month}
              </HeaderDays>
              <HeaderYear>{session.year}</HeaderYear>
            </CardHeader>

            <CardBody>
              <InfoLine>
                <InfoIconWrap>
                  <MapPin width={16} height={16} />
                </InfoIconWrap>
                <InfoText variant="body2" color="gray.1">
                  {info.location}
                </InfoText>
              </InfoLine>

              <InfoLine>
                <InfoIconWrap>
                  <UsersAlt width={16} height={16} />
                </InfoIconWrap>
                <InfoText variant="body2" color="gray.1">
                  {info.capacity}
                </InfoText>
              </InfoLine>

              <InfoLine>
                <InfoIconWrap>
                  <FocusTarget width={16} height={16} />
                </InfoIconWrap>
                <InfoText variant="body2" color="gray.1">
                  {info.audience}
                </InfoText>
              </InfoLine>

              <CardFooter
                href={session.href || sessionCtaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sessionCtaLabel}
                <span className="arrow">→</span>
              </CardFooter>
            </CardBody>
          </SessionCard>
        ))}
      </Box>

      {contactHref && (
        <ContactNote className="animate-fade-in-up animate-delay-4">
          {contactNote}{' '}
          <ContactLink href={contactHref}>
            {contactLabel} →
          </ContactLink>
        </ContactNote>
      )}
    </Container>
  </Box>
);

Agenda.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  title: PropTypes.node,
  subtitle: PropTypes.string,
  text: PropTypes.node,
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
      days: PropTypes.string,
    })
  ),
  sessionCtaLabel: PropTypes.string,
  sessionCtaHref: PropTypes.string,
  info: PropTypes.shape({
    location: PropTypes.string,
    capacity: PropTypes.string,
    audience: PropTypes.string,
  }),
  contactNote: PropTypes.string,
  contactLabel: PropTypes.string,
  contactHref: PropTypes.string,
};

Agenda.defaultProps = {
  WrapperProps: {
    pt: {
      _: 56,
      md: 64,
      lg: 80,
    },
    pb: {
      _: 56,
      md: 64,
      lg: 80,
    },
    backgroundColor: 'gray.6',
  },
  ContainerProps: {
    textAlign: 'center',
  },
  CaptionProps: {
    mb: 4,
    maxWidth: 720,
    mx: 'auto',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 1,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    mb: 4,
    lineHeight: 1.6,
  },
  ...data.agenda,
};

export default Agenda;
