import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@pagerland/common/src/components/Box';
import Typography from '@pagerland/common/src/components/Typography';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import data from '../../data';
import {SliderContainer, SliderTrack, LogoContainer, PartnerLink, SliderWrapper, ArrowButton} from './styled.components';

const Partners = ({
  name,
  title,
  partners,
  WrapperProps,
  ContainerProps,
  TitleProps,
  ImageProps,
}) => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const getOneSetWidth = () => {
    if (!sliderRef.current) return 0;
    return sliderRef.current.scrollWidth / 3;
  };

  const checkBounds = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const oneSetWidth = getOneSetWidth();

    if (slider.scrollLeft <= 10) {
      slider.style.scrollBehavior = 'auto';
      slider.scrollLeft = oneSetWidth + 10;
      slider.style.scrollBehavior = 'smooth';
    } else if (slider.scrollLeft >= oneSetWidth * 2 - slider.clientWidth) {
      slider.style.scrollBehavior = 'auto';
      slider.scrollLeft = oneSetWidth - slider.clientWidth + 10;
      slider.style.scrollBehavior = 'smooth';
    }
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 80;
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
      setTimeout(checkBounds, 100);
    }
  };

  const startScroll = (direction) => {
    scroll(direction);
    intervalRef.current = setInterval(() => {
      scroll(direction);
    }, 80);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const oneSetWidth = sliderRef.current.scrollWidth / 3;
      sliderRef.current.scrollLeft = oneSetWidth;
    }
  }, [partners]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        <Typography {...TitleProps}>{title}</Typography>
        <SliderWrapper>
          <ArrowButton
            direction="left"
            onMouseDown={() => startScroll('left')}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            onTouchStart={() => startScroll('left')}
            onTouchEnd={stopScroll}
            aria-label="Défiler vers la gauche"
          >
            &#8249;
          </ArrowButton>
          <SliderContainer ref={sliderRef}>
            <SliderTrack>
              {[...partners, ...partners, ...partners].map(
                (partner, i) => (
                  <LogoContainer key={i} mx="50px">
                    <PartnerLink
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={partner.name}
                    >
                      <Img
                        {...ImageProps}
                        src={partner.logo}
                        alt={partner.name}
                      />
                    </PartnerLink>
                  </LogoContainer>
                )
              )}
            </SliderTrack>
          </SliderContainer>
          <ArrowButton
            direction="right"
            onMouseDown={() => startScroll('right')}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            onTouchStart={() => startScroll('right')}
            onTouchEnd={stopScroll}
            aria-label="Défiler vers la droite"
          >
            &#8250;
          </ArrowButton>
        </SliderWrapper>
      </Container>
    </Box>
  );
};

Partners.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  ImageProps: PropTypes.object,
  title: PropTypes.node,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

Partners.defaultProps = {
  WrapperProps: {
    py: {
      _: 100,
      lg: 100,
    },
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
  ImageProps: {
    height: 60,
    width: 'auto',
  },
  ...data.partners,
};

export default Partners;
