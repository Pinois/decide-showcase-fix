import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';

import data from '../../data';

const Testimonials = ({
  name,
  title,
  text,
  testimonials,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  TestimonialsGridProps,
  TestimonialCardProps,
  QuoteIconProps,
  QuoteTextProps,
  AuthorProps,
  AuthorNameProps,
  AuthorFunctionProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps} dangerouslySetInnerHTML={text} />
        </Fade>
      </Box>
      
      <Grid {...TestimonialsGridProps}>
        {testimonials.map((testimonial, key) => (
          <Fade bottom cascade duration={600} delay={key * 100} key={key}>
            <Box {...TestimonialCardProps}>
              <Typography {...QuoteIconProps}>"</Typography>
              <Typography {...QuoteTextProps}>{testimonial.quote}</Typography>
              <Box {...AuthorProps}>
                <Typography {...AuthorNameProps}>{testimonial.author}</Typography>
                <Typography {...AuthorFunctionProps}>{testimonial.function}</Typography>
              </Box>
            </Box>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
);

Testimonials.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  TestimonialsGridProps: PropTypes.object,
  TestimonialCardProps: PropTypes.object,
  QuoteIconProps: PropTypes.object,
  QuoteTextProps: PropTypes.object,
  AuthorProps: PropTypes.object,
  AuthorNameProps: PropTypes.object,
  AuthorFunctionProps: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      function: PropTypes.string,
    })
  ),
};

Testimonials.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
    backgroundColor: 'gray.6',
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
  TestimonialsGridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '40px',
    maxWidth: 1200,
    mx: 'auto',
  },
  TestimonialCardProps: {
    p: 4,
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 48, 61, 0.1)',
    textAlign: 'center',
  },
  QuoteIconProps: {
    fontSize: 48,
    color: 'primary',
    mb: 3,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  QuoteTextProps: {
    variant: 'body2',
    color: 'gray.1',
    mb: 4,
    fontStyle: 'italic',
  },
  AuthorProps: {
    mt: 4,
    pt: 3,
    borderTop: '1px solid',
    borderColor: 'gray.5',
  },
  AuthorNameProps: {
    variant: 'h6',
    color: 'black',
    fontWeight: 'bold',
    mb: 1,
  },
  AuthorFunctionProps: {
    variant: 'body2',
    color: 'gray.1',
  },
  ...data.testimonials,
};

export default Testimonials;