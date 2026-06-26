import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import { track } from '@pagerland/common/src/utils/track';
import data from '../../data';
import { Marquee, Track, LogoList, LogoItem, PartnerLink } from './styled.components';

const Partners = ({
  name,
  title,
  partners,
  WrapperProps,
  ContainerProps,
  TitleProps,
}) => {
  const renderSet = (ariaHidden) => (
    <LogoList aria-hidden={ariaHidden || undefined}>
      {partners.map((partner, i) => (
        <LogoItem key={`${ariaHidden ? 'dup' : 'src'}-${i}`}>
          <PartnerLink
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={ariaHidden ? -1 : 0}
            onClick={() => track('partner_click', { partner: partner.name })}
          >
            <img src={partner.logo} alt={ariaHidden ? '' : partner.name} />
          </PartnerLink>
        </LogoItem>
      ))}
    </LogoList>
  );

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        <Typography {...TitleProps} dangerouslySetInnerHTML={{ __html: title }} />
        <Marquee role="region" aria-label="Nos partenaires">
          <Track>
            {renderSet(false)}
            {renderSet(true)}
          </Track>
        </Marquee>
      </Container>
    </Box>
  );
};

Partners.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  title: PropTypes.node,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

Partners.defaultProps = {
  WrapperProps: {
    py: {
      _: 100,
      lg: 100,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 5,
  },
  ...data.partners,
};

export default Partners;
