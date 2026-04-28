import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Link from '@pagerland/common/src/components/Link';
import { Link as ScrollLink } from 'react-scroll';
import Icon from '@pagerland/common/src/components/Icon';
import Grid from '@pagerland/common/src/components/Grid';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import Check from '@pagerland/icons/src/monochrome/Check';

import Logo from '../../components/Logo';

import data from '../../data';

const FOOTER_HEADING = '#E8EEF0';
const FOOTER_BODY = '#A8B7BD';

const WhiteLogo = styled(Logo)`
  width: 130px;
  height: auto;
  margin-left: -5px;
  opacity: 0.9;
  filter: brightness(0) invert(1);
`;

const InlineCredit = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${FOOTER_HEADING};
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(232, 238, 240, 0.25);
  color: ${FOOTER_HEADING};
  text-decoration: none;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    display: block;
    fill: currentColor;
  }

  &:hover {
    border-color: ${FOOTER_HEADING};
    background-color: rgba(232, 238, 240, 0.08);
  }
`;

// Simple clipboard icon SVG component
const CopyIcon = ({ size = 12, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const StyledScrollLink = styled(ScrollLink)`
  display: block;
  color: ${FOOTER_BODY};
  margin-bottom: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${FOOTER_HEADING};
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  margin-left: 8px;
  cursor: pointer;
  color: ${FOOTER_BODY};
  opacity: 0.6;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  &:hover {
    opacity: 1;
    color: ${FOOTER_HEADING};
  }
`;

const Footer = (props) => {
  const {
    logo,
    baseline,
    socialLinks,
    company,
    contact,
    administration,
    copyright,
    legalLinks,
    WrapperProps,
    ContainerProps,
    MainGridProps,
    ColumnProps,
    LogoProps,
    BaselineProps,
    SocialLinksProps,
    SocialLinkProps,
    ColumnTitleProps,
    ContactItemProps,
    ContactIconProps,
    ContactTextProps,
    AdminMemberProps,
    AdminBannerProps,
    AdminBannerTitleProps,
    AdminMembersListProps,
    BottomBarProps,
    CopyrightProps,
    LegalLinksProps,
    LegalLinkProps,
  } = props;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      {/* Grille principale 4 colonnes */}
      <Grid {...MainGridProps}>
        {/* Colonne Logo / Baseline */}
        <Box {...ColumnProps}>
          <Box mb={3} mt="50px">
            <WhiteLogo />
          </Box>
          <Typography {...BaselineProps}>{baseline}</Typography>
        </Box>

        {/* Colonne Naviguer */}
        {company && company.length > 0 && (
          <Box {...ColumnProps}>
            <Typography {...ColumnTitleProps}>Naviguer</Typography>
            {company.map((item, key) => (
              <StyledScrollLink
                key={key}
                to={item.href ? item.href.replace('#', '') : ''}
                spy
                smooth
                duration={500}
                offset={-60}
              >
                {item.label}
              </StyledScrollLink>
            ))}
          </Box>
        )}

        {/* Colonne Contact */}
        <Box {...ColumnProps}>
          <Typography {...ColumnTitleProps}>Contact</Typography>

          {contact.email && (
            <Box {...ContactItemProps}>
              <Icon icon={PaperAirplane} {...ContactIconProps} />
              <Link as="a" href={`mailto:${contact.email}`} {...ContactTextProps}>
                {contact.email}
              </Link>
              <CopyButton
                onClick={() => handleCopy(contact.email, 'email')}
                title="Copier l'email"
              >
                {copiedField === 'email' ? (
                  <Icon icon={Check} fontSize={12} color="secondary" />
                ) : (
                  <CopyIcon size={12} />
                )}
              </CopyButton>
            </Box>
          )}

          {contact.phone && (
            <Box {...ContactItemProps}>
              <Icon icon={MobilePhone} {...ContactIconProps} />
              <Link as="a" href={`tel:${contact.phone}`} {...ContactTextProps}>
                {contact.phone}
              </Link>
              <CopyButton
                onClick={() => handleCopy(contact.phone, 'phone')}
                title="Copier le numéro"
              >
                {copiedField === 'phone' ? (
                  <Icon icon={Check} fontSize={12} color="secondary" />
                ) : (
                  <CopyIcon size={12} />
                )}
              </CopyButton>
            </Box>
          )}

          {contact.address && (
            <Box {...ContactItemProps}>
              <Icon icon={MapMarker} {...ContactIconProps} />
              <Typography {...ContactTextProps}>
                {contact.address}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Colonne Suivez-nous */}
        <Box {...ColumnProps}>
          <Typography {...ColumnTitleProps}>Suivez-nous</Typography>
          {socialLinks && socialLinks.length > 0 && (
            <Box {...SocialLinksProps}>
              {socialLinks.map((social, key) => {
                const IconComp = social.icon;
                return (
                  <SocialIcon
                    key={key}
                    href={social.href}
                    title={social.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComp />
                  </SocialIcon>
                );
              })}
            </Box>
          )}
        </Box>
      </Grid>

      {/* Bandeau Conseil d'Administration */}
      {administration && administration.members && administration.members.length > 0 && (
        <Box {...AdminBannerProps}>
          <Typography {...AdminBannerTitleProps}>
            {administration.title || "Conseil d'administration"}
          </Typography>
          <Box {...AdminMembersListProps}>
            {administration.members.map((member, key) => (
              <Typography key={key} {...AdminMemberProps}>
                {member.name}{' '}
                <span style={{ opacity: 0.6 }}>({member.role})</span>
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      {/* Barre inférieure */}
      <Box {...BottomBarProps}>
        <Typography {...CopyrightProps}>
          {copyright} · Theme by{' '}
          <InlineCredit
            href="https://wpriders.com/coffeecream-react-gatsby-theme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coffeecream
          </InlineCredit>
        </Typography>
        {legalLinks && legalLinks.length > 0 && (
          <Box {...LegalLinksProps}>
            {legalLinks.map((link, key) => (
              <Link key={key} {...LegalLinkProps} href={link.href || '#'} dangerouslySetInnerHTML={{ __html: link.label }} />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  </Box>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
  baseline: PropTypes.string,
  socialLinks: PropTypes.array,
  workshops: PropTypes.array,
  company: PropTypes.array,
  contact: PropTypes.object,
  administration: PropTypes.object,
  copyright: PropTypes.string,
  legalLinks: PropTypes.array,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  MainGridProps: PropTypes.object,
  ColumnProps: PropTypes.object,
  LogoProps: PropTypes.object,
  BaselineProps: PropTypes.object,
  SocialLinksProps: PropTypes.object,
  SocialLinkProps: PropTypes.object,
  ColumnTitleProps: PropTypes.object,
  ColumnLinkProps: PropTypes.object,
  ContactItemProps: PropTypes.object,
  ContactIconProps: PropTypes.object,
  ContactTextProps: PropTypes.object,
  AdministrationProps: PropTypes.object,
  AdminTitleProps: PropTypes.object,
  AdminMemberProps: PropTypes.object,
  BottomBarProps: PropTypes.object,
  CopyrightProps: PropTypes.object,
  LegalLinksProps: PropTypes.object,
  LegalLinkProps: PropTypes.object,
};

Footer.defaultProps = {
  WrapperProps: {
    bg: 'primary',
    color: FOOTER_HEADING,
    pt: {
      _: 10,
      lg: 12,
    },
    pb: {
      _: 5,
      lg: 6,
    },
  },
  ContainerProps: {
    maxWidth: 1200,
  },
  MainGridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: '1fr 1fr',
      lg: '1.5fr 1fr 1fr 1fr',
    },
    gridGap: '40px',
    mb: 5,
  },
  ColumnProps: {
    mb: {
      _: 4,
      lg: 0,
    },
  },
  LogoProps: {
    variant: 'h3',
    color: FOOTER_HEADING,
    mb: 3,
    mt: '50px',
    fontWeight: 'bold',
  },
  BaselineProps: {
    variant: 'body1',
    color: FOOTER_BODY,
    mb: 4,
    lineHeight: 1.6,
  },
  SocialLinksProps: {
    display: 'flex',
    alignItems: 'center',
    style: { gap: '14px' },
  },
  SocialLinkProps: {
    color: FOOTER_BODY,
    fontSize: 24,
    '&:hover': {
      color: FOOTER_HEADING,
    },
  },
  ColumnTitleProps: {
    variant: 'h5',
    color: FOOTER_HEADING,
    mb: 3,
    mt: '50px',
    fontWeight: 'bold',
  },
  ColumnLinkProps: {
    as: 'a',
    display: 'block',
    variant: 'body2',
    color: FOOTER_BODY,
    mb: 2,
    textDecoration: 'none',
    '&:hover': {
      color: FOOTER_HEADING,
    },
  },
  ContactItemProps: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  ContactIconProps: {
    color: FOOTER_BODY,
    fontSize: 16,
    mr: 2,
  },
  ContactTextProps: {
    variant: 'body2',
    color: FOOTER_BODY,
    textDecoration: 'none',
    '&:hover': {
      color: FOOTER_HEADING,
    },
  },
  AdminTitleProps: {
    variant: 'h5',
    color: FOOTER_HEADING,
    mb: 3,
    fontWeight: 'bold',
  },
  AdminMemberProps: {
    color: FOOTER_BODY,
    style: { whiteSpace: 'nowrap', fontSize: '14px', lineHeight: 1.6 },
  },
  AdminBannerProps: {
    pt: 3,
    pb: 3,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.3',
    mb: 0,
  },
  AdminBannerTitleProps: {
    variant: 'h5',
    color: FOOTER_HEADING,
    fontWeight: 'bold',
    mb: 2,
    fontSize: 14,
  },
  AdminMembersListProps: {
    display: 'flex',
    flexWrap: 'wrap',
    style: { gap: '8px 24px' },
  },
  BottomBarProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      md: 'row',
    },
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.3',
    pt: 4,
    pb: 3,
    gap: 3,
  },
  CopyrightProps: {
    variant: 'body2',
    color: FOOTER_BODY,
  },
  LegalLinksProps: {
    display: 'flex',
    flexWrap: 'wrap',
    style: { gap: '6px 4px' },
    my: 3,
  },
  LegalLinkProps: {
    as: 'a',
    variant: 'body2',
    color: FOOTER_BODY,
    textDecoration: 'none',
    '&:hover': {
      color: FOOTER_HEADING,
    },
  },
  ...data.newFooter,
};

export default Footer;