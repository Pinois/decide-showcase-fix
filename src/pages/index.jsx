import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';

import {Helmet} from 'react-helmet';

import Theme, {theme} from '@pagerland/themes/src/Startup';
import {
  Navbar,
  Footer,
  Welcome,
  Services,
  About,
  // Testimonials, // TODO: En attente des vrais témoignages
  Team,
  FAQ,
  Contact,
} from '@pagerland/themes/src/Startup/containers';

import preview from '@pagerland/themes/src/Startup/assets/preview.png';

import SEO from '../components/SEO';
import Partners from '@pagerland/themes/src/Startup/containers/Partners';

const Startup = ({url}) => (
  <Theme>
    <Helmet>
      {/* Preconnect pour améliorer la performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cloud.umami.is" />
      <link rel="dns-prefetch" href="https://calendly.com" />

      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="43c51cd6-2c1c-48d6-b5a9-2f8bc536a939"
      ></script>
    </Helmet>
    <SEO title="DEC!DE" />
    <Sticky style={{zIndex: 999, position: 'relative'}}>
      <Navbar />
    </Sticky>
    <Welcome name="" />
    <Services name="services" />
    <About name="about" />
    {/* <Testimonials name="testimonials" /> // TODO: En attente des vrais témoignages */}
    <Partners name="partners" />
    <Team name="team" />
    <FAQ name="faq" />
    {/* <Blog name="blog" /> */}
    <Contact name="contact" />
    <Footer />
  </Theme>
);

Startup.propTypes = {
  url: PropTypes.string,
};

Startup.defaultProps = {
  url: 'https://decideetvous.com/',
};

export default Startup;
