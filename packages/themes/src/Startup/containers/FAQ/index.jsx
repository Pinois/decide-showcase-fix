import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import data from '../../data';

const FAQHeader = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 48, 61, 0.03);
  }
`;

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
  ToggleIconProps,
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
        <Typography {...TitleProps} className="animate-fade-in-up">{title}</Typography>

        <Box maxWidth={800} mx="auto">
          {faqs.map((faq, index) => (
            <Box {...FAQItemProps} key={index} className={`animate-fade-in-up animate-delay-${Math.min(index + 1, 5)}`}>
              <FAQHeader onClick={() => toggleItem(index)}>
                <Typography {...QuestionProps}>{faq.question}</Typography>
                <Typography
                  {...ToggleIconProps}
                  transform={openItems[index] ? 'rotate(45deg)' : 'rotate(0deg)'}
                >
                  +
                </Typography>
              </FAQHeader>

              <Box
                overflow="hidden"
                transition="all 0.3s ease"
                maxHeight={openItems[index] ? '1000px' : '0'}
                opacity={openItems[index] ? 1 : 0}
              >
                <Typography {...AnswerProps}>
                  {faq.answer}
                </Typography>
              </Box>
            </Box>
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
  ToggleIconProps: PropTypes.object,
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
    mb: 4,
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
    variant: 'body2',
    color: 'gray.1',
    px: 4,
    pb: 4,
    textAlign: 'left',
    lineHeight: 1.6,
  },
  ToggleIconProps: {
    fontSize: 24,
    color: 'primary',
    transition: 'transform 0.3s ease',
  },
  ...data.faq,
};

export default FAQ;