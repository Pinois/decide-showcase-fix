import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';
import Img from '@pagerland/common/src/components/Img';
import { MemberCard } from './styled.components';

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
  MemberCardProps,
  MemberImageProps,
  MemberNameProps,
  MemberPositionProps,
  MemberDescriptionProps,
  LinkedinButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps} className="animate-fade-in-up">
        <Typography {...TitleProps}>{title}</Typography>
        <Typography {...TextProps} dangerouslySetInnerHTML={text} />
      </Box>

      <Grid {...TeamGridProps}>
        {members.map((member, index) => (
          <MemberCard {...MemberCardProps} key={index} className={`animate-fade-in-up animate-delay-${Math.min(index + 1, 5)}`}>
            <Box
              width={200}
              height={200}
              mb={3}
              mx="auto"
              borderRadius="12px"
              overflow="hidden"
              backgroundColor="gray.5"
            >
              <Img
                src={member.image.src}
                alt={member.name}
                width="100%"
                height="100%"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                borderRadius="12px"
              />
            </Box>
            <Typography {...MemberNameProps}>{member.name}</Typography>
            <Typography {...MemberPositionProps}>{member.position}</Typography>
            <Typography {...MemberDescriptionProps} flex="1">{member.description}</Typography>
            <Button {...LinkedinButtonProps} href={member.linkedin}>
              <span role="img" aria-label="link">🔗</span> Voir le profil LinkedIn
            </Button>
          </MemberCard>
        ))}
      </Grid>
    </Container>
  </Box>
);

Team.propTypes = {
  ImageWrapperProps: PropTypes.object,
  /**
   * Welcome image props
   * @See @pagerland/common/src/components/Img
   */
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
   * Props of button below grid
   * @See @pagerland/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Props of single person item wrapper
   * @See @pagerland/common/src/components/Box
   */
  PersonWrapperProps: PropTypes.object,
  /**
   * Props of person avatar
   */
  AvatarProps: PropTypes.object,
  /**
   * Props of person name
   */
  NameProps: PropTypes.object,
  /**
   * Props of person position
   */
  PositionProps: PropTypes.object,
  DescProps: PropTypes.object,
  /**
   * Props of linkedin link icon
   */
  LinkedinIconProps: PropTypes.object,
  /**
   * Props of twitter link icon
   */
  TwitterIconProps: PropTypes.object,
  /**
   * Props of skype link icon
   */
  SkypeIconProps: PropTypes.object,
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
  /**
   * List of team members
   */
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.object,
      name: PropTypes.node,
      position: PropTypes.node,
      social: PropTypes.shape({
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
        skype: PropTypes.string,
      }),
    })
  ),
  imgMarie: PropTypes.object,
};

Team.defaultProps = {
  WrapperProps: {
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
  TeamGridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '40px',
    maxWidth: 1200,
    mx: 'auto',
  },
  MemberCardProps: {
    textAlign: 'center',
    p: 4,
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 48, 61, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  MemberImageProps: {
    width: 200,
    height: 200,
    mb: 3,
    mx: 'auto',
    borderRadius: '50%',
  },
  MemberNameProps: {
    variant: 'h4',
    color: 'black',
    mb: 2,
  },
  MemberPositionProps: {
    variant: 'body2',
    color: 'secondary',
    mb: 3,
    fontStyle: 'italic',
  },
  MemberDescriptionProps: {
    variant: 'body2',
    color: 'gray.1',
    mb: 4,
    textAlign: 'left',
  },
  LinkedinButtonProps: {
    as: 'a',
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: 'default',
    fontSize: 'body2',
  },
  ...data.team,
};

export default Team;
