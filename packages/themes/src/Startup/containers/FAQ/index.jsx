import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Fade from 'react-reveal/Fade';
import data from '../../data';

const FAQ = ({
  name,
  title,
  faqs,
  WrapperProps,
  ContainerProps,
  TitleProps,
  FAQItemProps,
  QuestionProps,
  AnswerProps,
}) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
        
        <Box maxWidth={800} mx="auto">
          {faqs.map((faq, index) => (
            <Fade bottom cascade duration={600} delay={index * 100} key={index}>
              <Box {...FAQItemProps}>
                <Box
                  onClick={() => toggleItem(index)}
                  cursor="pointer"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={3}
                  px={4}
                >
                  <Typography {...QuestionProps}>{faq.question}</Typography>
                  <Typography
                    fontSize="24px"
                    color="primary"
                    transform={openItems[index] ? 'rotate(45deg)' : 'rotate(0deg)'}
                    transition="transform 0.3s ease"
                  >
                    +
                  </Typography>
                </Box>
                
                <Box
                  overflow="hidden"
                  transition="all 0.3s ease"
                  maxHeight={openItems[index] ? '200px' : '0'}
                  opacity={openItems[index] ? 1 : 0}
                >
                  <Typography {...AnswerProps}>
                    {faq.answer}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

FAQ.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  FAQItemProps: PropTypes.object,
  QuestionProps: PropTypes.object,
  AnswerProps: PropTypes.object,
  title: PropTypes.node,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
};

FAQ.defaultProps = {
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
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 5,
  },
  FAQItemProps: {
    mb: 3,
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 48, 61, 0.08)',
    border: '1px solid',
    borderColor: 'gray.5',
    cursor: 'pointer',
  },
  QuestionProps: {
    variant: 'h5',
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  AnswerProps: {
    variant: 'body1',
    color: 'gray.1',
    px: 4,
    pb: 4,
    textAlign: 'left',
    lineHeight: 1.6,
  },
  ...data.faq,
};

export default FAQ;