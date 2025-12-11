import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';

import Card from '@pagerland/common/src/components/Card';
import { Form, Formik } from 'formik';
import Input from '@pagerland/common/src/components/Formik/Input';
import Button from '@pagerland/common/src/components/Button';
import data from '../../data';
import Background from './Background';
import Squares from './Squares';

const Contact = ({
  name,
  mailer,
  cta,
  WrapperProps,
  ContainerProps,
  MainGridProps,
  MailerCardProps,
  MailerTitleProps,
  MailerButtonProps,
  CTACardProps,
  CTATitleProps,
  CTATextProps,
  CTAListProps,
  CTAListItemProps,
  CTAButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      {/* Grille avec CTA et formulaire */}
      <Box {...MainGridProps}>
        {/* Bloc CTA */}
        <Card {...CTACardProps}>
          <Box>
            <Typography {...CTATitleProps}>{cta.title}</Typography>
            <Typography {...CTATextProps}>{cta.text}</Typography>
            <Box {...CTAListProps}>
              {cta.features.map((feature, key) => (
                <Typography key={key} {...CTAListItemProps}>
                  <span role="img" aria-label="checkmark">✔️</span> {feature}
                </Typography>
              ))}
            </Box>
          </Box>
          <Button {...CTAButtonProps} href={cta.button.href} as="a" target="_blank" rel="noopener noreferrer">
            {cta.button.label}
          </Button>
        </Card>

        {/* Bloc formulaire */}
        <Card {...MailerCardProps}>
          <Squares />
          <Typography {...MailerTitleProps}>{mailer.title}</Typography>
          <Formik
            validationSchema={mailer.validationSchema}
            onSubmit={mailer.onSubmit}
            initialValues={mailer.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {},
            )}
          >
            <Form name="contact" method="POST" data-netlify={true}>
              <Fade cascade bottom duration={600}>
                <div>
                  {mailer.fields.map(field => (
                    <Input key={field.name} name={field.name} {...field} />
                  ))}
                </div>
                <Input multiline name="message" key="message" label="Message" placeholder="Votre message" />
                <Button type="submit" {...MailerButtonProps}>
                  {mailer.cta}
                </Button>
              </Fade>
            </Form>
          </Formik>
        </Card>
      </Box>
    </Container>
  </Box>
);

Contact.propTypes = {
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
  DetailsWrapperProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Props of section item wrapper
   * @See @pagerland/common/src/components/Box
   */
  SectionItemProps: PropTypes.object,
  /**
   * Props of section icon wrapper
   * @See @pagerland/common/src/components/Icon
   */
  SectionIconProps: PropTypes.object,
  /**
   * Props of section text wrapper
   * @See @pagerland/common/src/components/Typography
   */
  SectionTextProps: PropTypes.object,
  /**
   * Wrapper for social link buttons
   * @See @pagerland/common/src/components/Box
   */
  SocialLinkWrapperProps: PropTypes.object,
  /**
   * Social link item
   * @See @pagerland/common/src/components/Link
   */
  SocialLinkProps: PropTypes.object,
  /**
   * Props of mailer card
   * @See @pagerland/common/src/components/Card
   */
  MailerCardProps: PropTypes.object,
  /**
   * Props of mailer title
   * @See @pagerland/common/src/components/Typography
   */
  MailerTitleProps: PropTypes.object,
  /**
   * Props of mailer button
   * @See @pagerland/common/src/components/Button
   */
  MailerButtonProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Sections with contact details
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      text: PropTypes.node,
    }),
  ),
  /**
   * Social media links
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  /**
   * Mailer details
   */
  mailer: PropTypes.shape({
    /**
     * Title of mailer
     */
    title: PropTypes.node,
    /**
     * Send button content
     */
    cta: PropTypes.node,
    /**
     * Formik validation schema
     * @see https://jaredpalmer.com/formik/docs/guides/validation
     */
    validationSchema: PropTypes.object,
    /**
     * Form submit function
     */
    onSubmit: PropTypes.func,
    /**
     * List of fields
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Name of field
         */
        name: PropTypes.string.isRequired,
        /**
         * Type of field
         */
        type: PropTypes.string,
        /**
         * Placeholder for field
         */
        placeholder: PropTypes.string,
        /**
         * Initial value used in formik
         */
        initialValue: PropTypes.string,
      }),
    ),
  }),
};

Contact.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    position: 'relative',
    pt: {
      _: 56,
      md: 64,
      lg: 96,
    },
    pb: {
      _: 56,
      md: 64,
      lg: 120,
    },
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: {
      _: 'center',
      lg: 'flex-start',
    },
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  MainGridProps: {
    display: 'flex',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
    justifyContent: 'space-between',
    alignItems: {
      _: 'center',
      lg: 'stretch',
    },
    gap: {
      _: 4,
      lg: 6,
    },
    width: '100%',
  },
  CTACardProps: {
    bg: 'secondary',
    width: '100%',
    maxWidth: 544,
    p: {
      _: 24,
      md: 5,
    },
    boxShadow: 'secondary',
    borderRadius: {
      _: 'large',
      md: 'xxxLarge',
    },
    color: 'white',
    position: 'relative',
    mb: {
      _: 4,
      lg: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  CTATitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'white',
    mb: 3,
  },
  CTATextProps: {
    variant: 'body1',
    color: 'gray.6',
    mb: 4,
    lineHeight: 1.6,
  },
  CTAListProps: {
    mb: 4,
  },
  CTAListItemProps: {
    variant: 'body1',
    color: 'white',
    mb: 2,
  },
  CTAButtonProps: {
    variant: 'primary',
    width: '100%',
  },
  MailerCardProps: {
    bg: 'primary',
    width: '100%',
    maxWidth: 544,
    p: {
      _: 24,
      md: 5,
    },
    boxShadow: 'primary',
    borderRadius: {
      _: 'large',
      md: 'xxxLarge',
    },
    color: 'gray.7',
    position: 'relative',
  },
  MailerTitleProps: {
    as: 'h3',
    variant: 'h2',
    color: 'gray.7',
    mb: 4,
  },
  MailerButtonProps: {
    mt: 4,
    variant: 'secondary',
  },
  ...data.contact,
};

export default Contact;