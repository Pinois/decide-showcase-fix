import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Grid from '@pagerland/common/src/components/Grid';

import AngleDown from '@pagerland/icons/src/line/AngleDown';

import data from '../../data';
import { colors } from '../../styles';

const FAQItem = styled.div`
  background-color: white;
  border-radius: 14px;
  border: 1px solid ${colors.gray[5]};
  box-shadow: 0 2px 8px ${transparentize(0.92, colors.primary)};
  overflow: hidden;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    box-shadow: 0 6px 16px ${transparentize(0.88, colors.primary)};
    border-color: ${transparentize(0.7, colors.primary)};
  }

  &[data-open='true'] {
    border-color: ${transparentize(0.6, colors.primary)};
  }
`;

const QuestionRow = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  background: none;
  border: 0;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: ${colors.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${transparentize(0.97, colors.primary)};
  }
`;

const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${transparentize(0.92, colors.primary)};
  transition: transform 0.3s ease, background-color 0.25s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};

  svg {
    fill: ${colors.primary};
  }
`;

const AnswerWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ open }) => (open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease;
`;

const AnswerInner = styled.div`
  overflow: hidden;
`;

const AnswerText = styled.p`
  margin: 0;
  padding: 6px 22px 22px 22px;
  color: ${colors.gray[1]};
  font-size: 15px;
  line-height: 1.7;
  text-align: left;
`;

const FAQ = ({
  name,
  title,
  faqs,
  WrapperProps,
  ContainerProps,
  TitleProps,
  GridProps,
}) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        <Typography {...TitleProps} className="animate-fade-in-up">
          {title}
        </Typography>

        <Grid {...GridProps}>
          {faqs.map((faq, index) => {
            const isOpen = !!openItems[index];
            return (
              <FAQItem
                key={index}
                data-open={isOpen}
                className={`animate-fade-in-up animate-delay-${Math.min(index + 1, 5)}`}
              >
                <QuestionRow
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <Chevron open={isOpen}>
                    <AngleDown width={16} height={16} />
                  </Chevron>
                </QuestionRow>
                <AnswerWrapper open={isOpen} aria-hidden={!isOpen}>
                  <AnswerInner>
                    <AnswerText>{faq.answer}</AnswerText>
                  </AnswerInner>
                </AnswerWrapper>
              </FAQItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

FAQ.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  GridProps: PropTypes.object,
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
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      md: 'repeat(2, 1fr)',
    },
    gridGap: '20px',
    maxWidth: 1100,
    mx: 'auto',
    alignItems: 'start',
  },
  ...data.faq,
};

export default FAQ;
