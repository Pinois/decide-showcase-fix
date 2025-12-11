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

import data from '../../data';

const StyledScrollLink = styled(ScrollLink)`
  display: block;
  color: ${props => props.theme.colors.gray[5]};
  margin-bottom: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: white;
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  margin-left: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.gray[5]};
  opacity: 0.6;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  &:hover {
    opacity: 1;
    color: white;
  }
`;

const Footer = ({
  logo,
  baseline,
  socialLinks,
  workshops,
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
  ColumnLinkProps,
  ContactItemProps,
  ContactIconProps,
  ContactTextProps,
  AdministrationProps,
  AdminTitleProps,
  AdminMemberProps,
  BottomBarProps,
  CopyrightProps,
  LegalLinksProps,
  LegalLinkProps,
) => {
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
      {/* Grille principale */}
      <Grid {...MainGridProps}>
        {/* Colonne Logo / Baseline */}
        <Box {...ColumnProps}>
          <Typography {...LogoProps}>{logo}</Typography>
          <Typography {...BaselineProps}>{baseline}</Typography>
          {socialLinks && socialLinks.length > 0 && (
            <Box {...SocialLinksProps}>
              {socialLinks.map((social, key) => (
                <Link key={key} {...SocialLinkProps} href={social.href} title={social.title}>
                  <Icon icon={social.icon} />
                </Link>
              ))}
            </Box>
          )}
        </Box>

        {/* Colonne Entreprise */}
        {company && company.length > 0 && (
          <Box {...ColumnProps}>
            <Typography {...ColumnTitleProps}>Entreprise</Typography>
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
                  <span style={{ fontSize: '12px' }}>📋</span>
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
                  <span style={{ fontSize: '12px' }}>📋</span>
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

        {/* Colonne Conseil d'Administration - Partie 1 */}
        {administration && administration.members && administration.members.length > 0 && (
          <Box {...ColumnProps}>
            <Typography {...ColumnTitleProps}>{administration.title}</Typography>
            {administration.members.slice(0, 3).map((member, key) => (
              <Typography key={key} {...AdminMemberProps}>
                {member.name} — {member.role}
              </Typography>
            ))}
          </Box>
        )}

        {/* Colonne Conseil d'Administration - Partie 2 */}
        {administration && administration.members && administration.members.length > 3 && (
          <Box {...ColumnProps}>
            <Typography {...ColumnTitleProps} style={{ visibility: 'hidden' }}>.</Typography>
            {administration.members.slice(3).map((member, key) => (
              <Typography key={key} {...AdminMemberProps}>
                {member.name} — {member.role}
              </Typography>
            ))}
          </Box>
        )}
      </Grid>

      {/* Barre inférieure */}
      <Box {...BottomBarProps}>
        <Typography {...CopyrightProps}>{copyright}</Typography>
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
    color: 'white',
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
      lg: '2fr 1fr 1fr 1fr 1fr',
    },
    gridGap: {
      _: 4,
      lg: 4,
    },
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
    color: 'white',
    mb: 3,
    mt: '50px',
    fontWeight: 'bold',
  },
  BaselineProps: {
    variant: 'body1',
    color: 'gray.5',
    mb: 4,
    lineHeight: 1.6,
  },
  SocialLinksProps: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  SocialLinkProps: {
    color: 'gray.5',
    fontSize: 24,
    '&:hover': {
      color: 'white',
    },
  },
  ColumnTitleProps: {
    variant: 'h5',
    color: 'white',
    mb: 3,
    mt: '50px',
    fontWeight: 'bold',
  },
  ColumnLinkProps: {
    as: 'a',
    display: 'block',
    variant: 'body2',
    color: 'gray.5',
    mb: 2,
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  ContactItemProps: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  ContactIconProps: {
    color: 'gray.5',
    fontSize: 16,
    mr: 2,
  },
  ContactTextProps: {
    variant: 'body2',
    color: 'gray.5',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  AdminTitleProps: {
    variant: 'h5',
    color: 'white',
    mb: 3,
    fontWeight: 'bold',
  },
  AdminMemberProps: {
    variant: 'body2',
    color: 'gray.5',
    mb: 2,
    fontSize: 14,
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
    gap: 3,
  },
  CopyrightProps: {
    variant: 'body2',
    color: 'gray.5',
  },
  LegalLinksProps: {
    display: 'flex',
    gap: 4,
    my: 3,
  },
  LegalLinkProps: {
    as: 'a',
    variant: 'body2',
    color: 'gray.5',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
  ...data.newFooter,
};

export default Footer;