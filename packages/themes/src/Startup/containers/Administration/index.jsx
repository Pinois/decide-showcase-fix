import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import data from '../../data';

const Administration = ({
  name,
  title,
  members,
  WrapperProps,
  ContainerProps,
  TitleProps,
  MemberProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TitleProps}>{title}</Typography>
      {members.map((member, key) => (
        <Typography key={key} {...MemberProps}>
          {member.role} : <strong>{member.name}</strong>
        </Typography>
      ))}
    </Container>
  </Box>
);

Administration.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  MemberProps: PropTypes.object,
  title: PropTypes.node,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
    })
  ),
};

Administration.defaultProps = {
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
    variant: 'h3',
    mb: 20,
  },
  MemberProps: {
    variant: 'body1',
    mb: 2,
  },
  ...data.administration,
};

export default Administration;
