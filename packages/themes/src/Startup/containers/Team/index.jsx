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
import { RoundedImage } from '../About/styled.components';
import Background from '../Contact/Background';
import Squares from '../Welcome/Squares';
import { default as SquaresAlternative } from '../Contact/Squares';

const Team = ({
  name,
  title,
  text,
  cta,
  people,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  CtaProps,
  PersonWrapperProps,
  AvatarProps,
  NameProps,
  DescProps,
  PositionProps,
  LinkedinIconProps,
  TwitterIconProps,
  SkypeIconProps,
  ImageWrapperProps,
  ImageProps,
  img,
  imgMarion,
  imgManon,
  imgMars,
  ProfileContainerProps,
  ProfileImageWrapperProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Box {...ImageWrapperProps}>
          <Fade cascade duration={600}>
            <RoundedImage {...ImageProps} {...img} />
          </Fade>
        </Box>
        {/* <Squares /> */}
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography
            {...TextProps}
            dangerouslySetInnerHTML={text}
          ></Typography>
        </Fade>
      </Box>

      {/* Marion */}
      <Container {...ProfileContainerProps}>
        <Box {...ProfileImageWrapperProps}>
          <Fade cascade duration={600}>
            <RoundedImage {...ImageProps} {...imgMarion} />
          </Fade>
          <Squares />
        </Box>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>Marion De Backer</Typography>
            <Typography {...PositionProps}>
              Co-fondatrice & Eco-conseillère
            </Typography>
            <Typography {...TextProps}>
              Un diplôme en gestion de la communication d'organisation et des
              relations publiques en poche, Marion s'engage dans différents
              projets liés à la lutte contre le changement climatique et décide
              de compléter sa formation en entamant une formation à l’Institut
              Eco-Conseil de Namur pour devenir éco-conseillère. En parallèle,
              elle développe le projet DEC!DE qui prendra son vrai envol grâce à
              la rencontre avec Manon, en octobre 2020. Passionnée par
              l’éducation et le concept du nudge, Marion met son expertise au
              service du développement des outils nudge, de l’animation ainsi
              que de la communication de l’association.
            </Typography>
            <Link href='https://www.linkedin.com/in/marion-de-backer1618/'>
              <Icon icon={LinkedinAlt} {...LinkedinIconProps} />
            </Link>
          </Fade>
        </Box>
      </Container>

      {/* Manon */}
      <Container {...ProfileContainerProps}>
        <Box
          {...ProfileImageWrapperProps}
          order={{
            _: 1,
            lg: 2,
          }}
        >
          <Fade cascade duration={600}>
            <RoundedImage {...ImageProps} {...imgManon} />
          </Fade>
          <Squares />
        </Box>
        <Box
          {...CaptionProps}
          order={{
            _: 2,
            lg: 1,
          }}
        >
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>Manon Berhin</Typography>
            <Typography {...PositionProps}>
              Co-fondatrice & Eco-conseillère
            </Typography>
            <Typography {...TextProps}>
              C’est en 2016 que Manon prend réellement conscience de l’ampleur
              de la crise climatique. Après un moment de sidération, elle
              ressent le besoin urgent de se mettre en action. Elle se forme
              alors à l’éco-conseil à l’Institut Eco-Conseil de Namur et c’est
              sa rencontre avec Marion qui fait basculer sa carrière
              professionnelle puisqu’à deux, elles fondent l’asbl DEC!DE. Forte
              de son expérience de coordinatrice de projets – qu’elle a acquise
              lors de sa première vie pro – et de ses connaissances des enjeux
              climatiques et environnementaux, Manon travaille au développement
              des animations de l’asbl.
            </Typography>
            <Link href='https://www.linkedin.com/in/manon-berhin-0aa82154/'>
              <Icon icon={LinkedinAlt} {...LinkedinIconProps} />
            </Link>
          </Fade>
        </Box>
      </Container>

      {/* Mars */}
      <Container {...ProfileContainerProps}>
        <Box {...ProfileImageWrapperProps}>
          <Fade cascade duration={600}>
            <RoundedImage {...ImageProps} {...imgMars} />
          </Fade>
          <Squares />
        </Box>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>Marceline Prevost</Typography>
            <Typography {...PositionProps}>
              Designeuse industrielle et sociale
            </Typography>
            <Typography {...TextProps}>
              En 2017, Marceline termine sa formation de design industriel à
              Liège. Déjà durant la conception de projet dans ses études, elle
              met un point d’honneur à choisir des procédés, des matières
              premières et développe des objets “éco-responsables” et qui place
              l’usager au centre du processus. Une fois ce diplôme en poche,
              elle complète son parcours avec Design Act! (nommé actuellement le
              SAS), une formation parisienne sur le design social. C’est son
              expérience dans les processus de création et les divers outils
              auxquels elle a été initiée qu’elle met à disposition de l’équipe
              de DEC!DE et de ses publics.
            </Typography>
            <Link href='https://www.linkedin.com/in/marceline-prevost-770537b8/'>
              <Icon icon={LinkedinAlt} {...LinkedinIconProps} />
            </Link>
          </Fade>
        </Box>
      </Container>

      <Container>
        {/* <SquaresAlternative /> */}
        <Typography variant='h3' mt={100} mb={20}>
          Le Conseil d’Administration
        </Typography>
        <Typography variant='body1'>
          Présidente : <strong>Maïté Mannie</strong>
        </Typography>
        <Typography variant='body1'>
          Vice-Président : <strong>Bernard Walschaerts</strong>
        </Typography>
        <Typography variant='body1'>
          Secrétaire : <strong>Véronique Schmitz</strong>
        </Typography>
        <Typography variant='body1'>
          Administratrice déléguée : <strong>Marion DeBacker</strong>
        </Typography>
      </Container>

      {/* <Grid {...GridProps}>
        {people.map((person, key) => (
          <Fade bottom cascade duration={600} delay={key * 100}>
            <Box {...PersonWrapperProps}>
              <Avatar {...AvatarProps} {...person.avatar} />
              <Typography {...NameProps}>{person.name}</Typography>
              <Typography {...PositionProps}>{person.position}</Typography>
              <Typography {...DescProps}>{person.desc}</Typography>

              {person.social.linkedin && (
                <Link href={person.social.linkedin}>
                  <Icon icon={LinkedinAlt} {...LinkedinIconProps} />
                </Link>
              )}
              {person.social.twitter && (
                <Link href={person.social.twitter}>
                  <Icon icon={Twitter} {...TwitterIconProps} />
                </Link>
              )}
              {person.social.skype && (
                <Link href={person.social.skype}>
                  <Icon icon={Skype} {...SkypeIconProps} />
                </Link>
              )}
            </Box>
          </Fade>
        ))}
      </Grid> */}

      {/* <Fade top cascade duration={600}>
        <Button {...CtaProps} {...cta}>
          {cta.label}
        </Button>
      </Fade> */}
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
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  ImageProps: {
    maxWidth: 300,
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
    p: 8,
    m: 2,
    mx: 50,
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
