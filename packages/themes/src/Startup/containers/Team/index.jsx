import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';
import Button from '@pagerland/common/src/components/Button';
import Icon from '@pagerland/common/src/components/Icon';

import LinkedinAlt from '@pagerland/icons/src/monochrome/LinkedinAlt';
import Twitter from '@pagerland/icons/src/monochrome/Twitter';
import Skype from '@pagerland/icons/src/monochrome/Skype';

import Link from '@pagerland/common/src/components/Link';
import data from '../../data';
import Avatar from '../../components/Avatar';
import {RoundedImage} from '../About/styled.components';
import Background from '../Contact/Background';
import Squares from '../Welcome/Squares';
import {default as SquaresAlternative} from '../Contact/Squares';

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
  PositionProps,
  ProfileContainerProps,
  ProfileImageWrapperProps,
  ImageProps,
  LinkedinIconProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography
            {...TextProps}
            dangerouslySetInnerHTML={text}
          ></Typography>
        </Fade>
      </Box>

      {members.map((member, index) => (
        <Container key={member.name} {...ProfileContainerProps}>
          <Box
            {...ProfileImageWrapperProps}
            order={{
              _: 1,
              lg: index % 2 === 0 ? 1 : 2,
            }}
          >
            <Fade cascade duration={600}>
              <RoundedImage {...ImageProps} {...member.image} />
            </Fade>
          </Box>
          <Box
            {...CaptionProps}
            order={{
              _: 2,
              lg: index % 2 === 0 ? 2 : 1,
            }}
          >
            <Fade bottom cascade duration={600}>
              <Typography {...TitleProps}>{member.name}</Typography>
              <Typography {...PositionProps}>
                {member.position}
              </Typography>
              <Typography
                {...TextProps}
                dangerouslySetInnerHTML={{__html: member.description}}
              ></Typography>
              <Link href={member.linkedin}>
                <Icon icon={LinkedinAlt} {...LinkedinIconProps} />
              </Link>
            </Fade>
          </Box>
        </Container>
      ))}
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
  ProfileContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 50,
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ProfileImageWrapperProps: {
    position: 'relative',
    mb: {
      _: 60,
      lg: 0,
    },
  },
  ImageWrapperProps: {
    position: 'relative',
    mb: {
      _: 60,
      lg: 0,
    },
  },
  WrapperProps: {
    py: {
      _: 30,
      md: 40,
      lg: 50,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  ImageProps: {
    maxWidth: {
      _: 300,
      md: 350,
      lg: 400,
    },
  },
  CaptionProps: {
    mb: {
      _: 4,
      md: 5,
    },
    mx: 'auto',
    maxWidth: 1188,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 1,
    textAlign: 'center',
  },
  TextProps: {
    color: 'gray.1',
    mb: 4,
    mx: {
      _: 0,
      md: 50,
    },
    textAlign: 'justify',
  },
  GridProps: {
    mb: {
      _: 4,
      md: 5,
    },
    gridTemplateColumns: {
      _: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    },
    gridColumnGap: '32px',
    gridRowGap: {
      _: '32px',
      md: '64px',
    },
  },
  AvatarProps: {
    width: 92,
    mb: 2,
  },
  NameProps: {
    variant: 'h5',
    color: 'black',
  },
  PositionProps: {
    color: 'secondary',
    mb: 2,
    fontStyle: 'italic',
  },
  DescProps: {
    color: 'primary',
    mb: 2,
  },
  CtaProps: {
    textAlign: 'center',
    mx: 'auto',
    variant: 'secondary',
    as: 'a',
  },
  LinkedinIconProps: {
    mx: 2,
    color: 'accent',
    fontSize: 24,
  },
  TwitterIconProps: {
    mx: 2,
    color: 'secondary',
    fontSize: 24,
  },
  SkypeIconProps: {
    mx: 2,
    color: 'accent',
    fontSize: 24,
  },
  ...data.team,
};

export default Team;
