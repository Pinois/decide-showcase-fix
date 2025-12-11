import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Index({ description, lang, meta, title, url, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = url || site.siteMetadata.siteUrl;
  const ogImage = image || `${siteUrl}/preview.png`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | Formations environnementales en Belgique`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: 'formation environnement, RSE, ESG, fresque du climat, nudge, développement durable, Belgique, Bruxelles, transition écologique, sensibilisation environnementale',
        },
        // Open Graph
        {
          property: 'og:title',
          content: `${title} | Formations environnementales en Belgique`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:locale',
          content: 'fr_BE',
        },
        {
          property: 'og:site_name',
          content: 'DEC!DE',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: `${title} | Formations environnementales en Belgique`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },
        // Autres
        {
          name: 'geo.region',
          content: 'BE',
        },
        {
          name: 'geo.placename',
          content: 'Bruxelles',
        },
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: siteUrl,
        },
      ]}
    >
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DEC!DE ASBL',
          description: metaDescription,
          url: siteUrl,
          logo: `${siteUrl}/icon.png`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bruxelles',
            addressCountry: 'BE',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+32-478-48-53-02',
            contactType: 'customer service',
            email: 'contact@decideetvous.com',
            availableLanguage: ['French'],
          },
          sameAs: [
            'https://www.linkedin.com/company/dec-de/',
            'https://www.instagram.com/decide_etvous/',
          ],
          areaServed: {
            '@type': 'Country',
            name: 'Belgium',
          },
          serviceType: [
            'Formation environnementale',
            'Accompagnement RSE',
            'Fresque du Climat',
            'Nudge',
          ],
        })}
      </script>
    </Helmet>
  );
}

Index.defaultProps = {
  lang: 'fr',
  meta: [],
  description: '',
  url: 'https://decideetvous.com',
  image: '',
};

Index.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Index;
