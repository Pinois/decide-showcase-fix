import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';

import {Helmet} from 'react-helmet';

import Theme, {theme} from '@pagerland/themes/src/Startup';
import {
  Navbar,
  Copyright,
  Welcome,
  Services,
  About,
  Team,
  Blog,
  Contact,
} from '@pagerland/themes/src/Startup/containers';

import preview from '@pagerland/themes/src/Startup/assets/preview.png';

import SEO from '../components/SEO';
import Partners from '@pagerland/themes/src/Startup/containers/Partners';
import Administration from '@pagerland/themes/src/Startup/containers/Administration';

const Startup = ({url}) => (
  <Theme>
    <Helmet>
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
    <Partners name="partners" />
    <Team name="team" />
    <Administration name="administration" />
    {/* <Blog name="blog" /> */}
    <Contact name="contact" />
    <Copyright />
  </Theme>
);

Startup.propTypes = {
  url: PropTypes.string,
};

Startup.defaultProps = {
  url: 'https://decideetvous.com/',
};

export default Startup;
