import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  SlideshowFrame,
  Slide,
  ProgressTrack,
  ProgressFill,
} from './styled.components';

const INTERVAL_MS = 6000;

const HeroSlideshow = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length < 2) return undefined;

    let timer = null;

    const tick = () => {
      setActiveIndex((i) => (i + 1) % images.length);
    };

    const start = () => {
      if (timer == null) timer = window.setInterval(tick, interval);
    };

    const stop = () => {
      if (timer != null) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reducedMotion, images.length, interval]);

  useEffect(() => {
    if (reducedMotion || images.length < 2) return;
    const next = (activeIndex + 1) % images.length;
    const preload = new Image();
    preload.src = images[next].src;
  }, [activeIndex, reducedMotion, images]);

  return (
    <SlideshowFrame>
      {images.map((image, index) => (
        <Slide key={image.src} $active={index === activeIndex}>
          <img
            src={image.src}
            alt={image.alt || ''}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding={index === 0 ? 'auto' : 'async'}
          />
        </Slide>
      ))}
      {!reducedMotion && images.length > 1 && (
        <ProgressTrack aria-hidden="true">
          <ProgressFill key={activeIndex} style={{ animationDuration: `${interval}ms` }} />
        </ProgressTrack>
      )}
    </SlideshowFrame>
  );
};

HeroSlideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
};

HeroSlideshow.defaultProps = {
  interval: INTERVAL_MS,
};

export default HeroSlideshow;
