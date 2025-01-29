import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import data from '../../data';
import {SliderContainer, SliderTrack} from './styled.components';

const Partners = ({
  name,
  title,
  partners,
  WrapperProps,
  ContainerProps,
  TitleProps,
  ImageProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TitleProps}>{title}</Typography>
      <SliderContainer>
        <SliderTrack>
          {[...partners, ...partners, ...partners].map(
            (partner, i) => (
              <Box key={i} mx={4}>
                <Img
                  {...ImageProps}
                  src={partner.logo}
                  alt={partner.name}
                />
              </Box>
            )
          )}
        </SliderTrack>
      </SliderContainer>
    </Container>
  </Box>
);

Partners.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  ImageProps: PropTypes.object,
  title: PropTypes.node,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
};

Partners.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 50,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 4,
  },
  ImageProps: {
    height: 60,
    width: 'auto',
  },
  ...data.partners,
};

export default Partners;
