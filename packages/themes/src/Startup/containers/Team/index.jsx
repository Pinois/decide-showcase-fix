import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';

import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';

import data from '../../data';
import Background from '../Pricing/Background';
import {
  MemberCard,
  MemberImageWrapper,
  RoleChip,
  Description,
  LinkedinLink,
} from './styled.components';

const Team = ({
  name,
  title,
  text,
  members,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  TeamGridProps,
  MemberNameProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps} className="animate-fade-in-up">
        <Typography {...TitleProps} dangerouslySetInnerHTML={{ __html: title }} />
        <Typography {...TextProps} dangerouslySetInnerHTML={text} />
      </Box>

      <Grid {...TeamGridProps}>
        {members.map((member, index) => (
          <MemberCard
            key={index}
            className={`animate-fade-in-up animate-delay-${Math.min(index + 1, 5)}`}
          >
            <MemberImageWrapper>
              <img
                src={member.image.src}
                alt={member.name}
              />
            </MemberImageWrapper>
            <Typography {...MemberNameProps}>{member.name}</Typography>
            <RoleChip>{member.position}</RoleChip>
            <Description>{member.description}</Description>
            <LinkedinLink
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn de ${member.name}`}
            >
              <Linkedin width={22} height={22} />
            </LinkedinLink>
          </MemberCard>
        ))}
      </Grid>
    </Container>
  </Box>
);

Team.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  TeamGridProps: PropTypes.object,
  MemberNameProps: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      description: PropTypes.string,
      linkedin: PropTypes.string,
      image: PropTypes.object,
    })
  ),
};

Team.defaultProps = {
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
    mb: 3,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    mb: 4,
  },
  TeamGridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '32px',
    alignItems: 'stretch',
  },
  MemberNameProps: {
    as: 'h3',
    variant: 'h4',
    color: 'black',
    mb: 2,
  },
  ...data.team,
};

export default Team;
