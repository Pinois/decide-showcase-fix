import {smoothLinkProps} from '@pagerland/common/src/utils';
import {Link} from 'react-scroll';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';

import FacebookF from '@pagerland/icons/src/monochrome/FacebookF';
import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import Twitter from '@pagerland/icons/src/monochrome/Twitter';
import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';

import * as Yup from 'yup';
//import Welcome from './assets/welcome.jpg';
//import Welcome2x from './assets/welcome@2x.jpg';
import AboutUs from './assets/about.jpeg';
import AboutUs2x from './assets/about.jpeg';

import MarionPortait from './assets/marion-decide.jpeg';
import ManonPortrait from './assets/manon-decide.jpeg';
import MarsPortrait from './assets/mars-decide.jpeg';

import LandingImage from './assets/landing_image.jpeg';

import Avatar1 from './assets/avatars/avatar_gustin.jpeg';
import Avatar12x from './assets/avatars/avatar_gustin.jpeg';
import Avatar2 from './assets/avatars/avatar_backer.jpeg';
import Avatar22x from './assets/avatars/avatar_backer.jpeg';
import Avatar3 from './assets/avatars/avatar_berhin.jpeg';
import Avatar32x from './assets/avatars/avatar_berhin.jpeg';
import Avatar4 from './assets/avatars/avatar_mars.jpeg';
import Avatar42x from './assets/avatars/avatar_mars.jpeg';

import Avatar5 from './assets/avatars/avatar_marie.jpg';
import Avatar52x from './assets/avatars/avatar_marie.jpg';

import Avatar6 from './assets/avatars/avatar_salva.jpeg';
import Avatar62x from './assets/avatars/avatar_salva.jpeg';
import Avatar7 from './assets/avatars/avatar_sarah.png';
import Avatar72x from './assets/avatars/avatar_sarah.png';

// import Estimations from './assets/estimation.svg';
// mport Ecommerce from './assets/ecommerce.svg';
import AnimationsImage from './assets/animations-decide.jpeg';
import ComicImage from './assets/ComicImageAndTeam.png';
import AppMockup from './assets/app_DECIDE-min.gif';
import NudgeImage from './assets/nudge-decide.jpeg';

import Codef from './assets/codef.png';
import Engie from './assets/engie.png';
import Gim from './assets/gim.png';
import Hastiere from './assets/hastiere.png';
import Icedd from './assets/icedd.png';
import Uliege from './assets/uliege.png';

// import Support from './assets/support.svg';

import PricingBasic from './assets/pricing/basic.svg';
import PricingAdvanced from './assets/pricing/advanced.svg';
import PricingExpert from './assets/pricing/expert.svg';

import Article1 from './assets/articles/article-1.jpg';
import Article12x from './assets/articles/article-1@2x.jpg';
import Article2 from './assets/articles/article-2.jpg';
import Article22x from './assets/articles/article-2@2x.jpg';
import Article3 from './assets/articles/article-3.jpg';
import Article32x from './assets/articles/article-3@2x.jpg';
import Article4 from './assets/articles/article-4.jpg';
import Article42x from './assets/articles/article-4@2x.jpg';
import Article5 from './assets/articles/article-5.jpg';
import Article52x from './assets/articles/article-5@2x.jpg';

import Decide122 from './assets/decide-122.jpg';

import MarionPhoto from './assets/Decide 68.jpg';
import ManonPhoto from './assets/Decide 79.jpg';
import MariePhoto from './assets/Decide 89.jpg';

const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&');
};

export default {
  title: 'DEC!DE & Vous',
  navbar: {
    links: [
      {
        to: '',
        label: 'Accueil',
      },
      {
        to: 'services',
        label: 'Activités',
      },
      {
        to: 'about',
        label: 'À propos',
      },
      {
        to: 'team',
        label: "L'équipe",
      },
      /*{
        to: 'pricing',
        label: 'Pricing',
      },*/
      // {
      //   to: 'blog',
      //   label: 'Actus',
      // },
      {
        to: 'contact',
        label: 'Contact',
      },

      /*{
        to: 'contact',
        label: 'Contact',
      },*/
    ],
    actions: [
      {
        label: 'Réservez un appel découverte (30min)',
        href: 'https://calendly.com/marion-decideetvous/30min',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  welcome: {
    title: "Le coup de pouce dont l'écologie a besoin",
    text: {
      __html:
        "DEC!DE <b>sensibilise</b> les organisations aux enjeux environnementaux et les <b>accompagne</b> dans l'intégration de la durabilité dans leur stratégie ainsi que dans la mise en place de dynamiques collectives pour mener à bien les projets de transition.",
    },
    actions: [
      {
        label: 'Télécharger notre brochure',
        as: 'a',
        href: 'https://github.com/Pinois/files/raw/main/Catalogue-DECIDE-2025.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        download: true,
        variant: 'primary',
      },
      {
        label: 'Réserver un appel découverte (30 min)',
        as: 'a',
        href: 'https://calendly.com/marion-decideetvous/30min',
        target: '_blank',
        rel: 'noopener noreferrer',
        variant: 'default',
      },
    ],
    img: {
      src: LandingImage,
      srcSet: `${LandingImage} 1x, ${LandingImage} 2x`,
    },
    avatars: [
      {
        src: Avatar2,
        srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
      },
      {
        src: Avatar3,
        srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
      },
      {
        src: Avatar5,
        srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
      },
    ],
  },
  services: {
    title: 'Activités',
    // text:
    //   'Aujourd'hui, les scientifiques sont unanimes : nous sommes responsables du dérèglement climatique et de la disparition massive de la biodiversité. La bonne nouvelle, c'est que nous pouvons aussi DEC!DER de faire partie de la solution! Comment? En comprenant les enjeux environnementaux pour mieux agir. En créant de nouveaux récits En nous aidant de dispositifs "coup de pouce".',
    text: {
      __html: `
        <div style="max-width: 600px; margin: 0 auto; text-align: left;">
          <h3 style="text-align:center;color: #aebdb4">Nos activités s'adressent :</h3>
          <ul>
            <li>Aux citoyen.nes de plus de 16 ans</li>
            <li>Aux organisations : Entreprises, administrations et écoles</li>
          </ul>
          <h3 style="text-align:center;color: #aebdb4; margin-top: 2rem;">Nos missions :</h3>
          <ul>
            <li>Sensibiliser aux enjeux liés aux dérèglements climatiques et à la perte de la biodiversité.</li>
            <li>Accompagner le changement auprès des individus et des collectivités.</li>
          </ul>
        </div>
      `,
    },

    services: [
      {
        icon: AnimationsImage,
        title:
          'Sensibiliser aux enjeux liés aux dérèglements climatiques et à la perte de la biodiversité',
        text: {
          __html:
            '<p>Dans le cadre de sa mission de sensibilisation, DEC!DE propose différentes formations thématiques à destination des écoles du secondaire supérieur, des hautes écoles et universités, des administrations et des entreprises.<br/><br/>Ces formations ont un triple objectif :<ul><li>rendre compréhensible les enjeux liés aux dérèglements climatiques et à la perte de la biodiversité ;</li><li>identifier les obstacles au changement et les transformer en forces empouvoirantes ;</li><li>imaginer ensemble des solutions adaptées aux besoins et à la réalité de chacun.e.</li></ul></p>',
        },
        buttonText: 'En savoir plus',
        buttonLink:
          'https://decideetvous.medium.com/dec-de-nos-animations-de-sensibilisation-et-de-solutions-d68acb57ab54',
      },
      {
        icon: NudgeImage,
        title:
          'Accompagner le changement des individus et des collectivités',
        text: {
          __html:
            "Dans le cadre de sa mission d'accompagnement du changement, DEC!DE offre une <b>expertise nudge</b> ainsi que des <b>accompagnements ESG</b> et mise en place de dynamiques collectives interne autour de la transition.<br/>Nous personnalisons nos accompagnements en fonction de vos besoins !",
        },
        buttonText: 'En savoir plus',
        buttonLink:
          'https://decideetvous.medium.com/cet-article-est-en-cours-de-r%C3%A9daction-abonnez-vous-et-revenez-tr%C3%A8s-bient%C3%B4t-780463b2e3b2',
      },
    ],
    /* cta: {
       label: 'En savoir plus',
       href:
         'To Do',
     }, */
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: "L'histoire de DEC!DE",
    text:
      "Le projet DEC!DE trouve ses racines dans l'envie de Marion d'associer le concept du nudge marketing et la sensibilisation pour faire face aux enjeux environnementaux. Entre septembre 2018 et octobre 2020, Marion élabore les premières lignes, participe à l'incubateur Boost Your Project, confronte le projet aux besoins des établissements scolaires et développe les premiers nudges. De son côté, après s'être formée à l'éco-conseil, Manon entame un accompagnement chez Groupe One afin de concrétiser le projet qu'elle a en tête depuis plusieurs mois : sensibiliser aux enjeux climatiques. En octobre 2020, Marion et Manon se rencontrent autour d'un café et les planètes s'alignent, c'est le coup de foudre ! Ensemble, elles redessinent les lignes directrices de DEC!DE et fondent l'asbl en décembre 2020. En septembre 2023, Marie vient renforcer l'équipe. Aujourd'hui, DEC!DE compte deux employées à temps partiel et est parvenue à entretenir des partenariats forts et durables.",
    secondImage: {
      src: Decide122,
      srcSet: `${Decide122} 1x, ${Decide122} 2x`,
    },
    /*cta: {
      label: 'En savoir plus',
      href:
        'To Do',
    }, */
  },
  team: {
    title: "L'équipe",
    text: {
      __html:
        "<h3 style='text-align:center;color: #aebdb4'> <b>L'équipe de DEC!DE est constituée de trois membres aux profils divers et complémentaires. Fort de leurs compétences diversifiées, chaque membre met ses savoir-faire et ses expériences au service du projet. </b></h3>",
    },
    members: [
      {
        name: 'Marion De Backer',
        position: 'Co-fondatrice & Eco-conseillère',
        image: {
          src: MarionPhoto,
          srcSet: `${MarionPhoto} 1x, ${MarionPhoto} 2x`,
        },
        linkedin: 'https://www.linkedin.com/in/marion-de-backer1618/',
        description:
          "Un diplôme en gestion de la communication d'organisation et des relations publiques en poche, <b>Marion</b> s'engage dans différents projets liés à la lutte contre le changement climatique et décide de compléter ses connaissances en entamant une formation à l'Institut Eco-Conseil de Namur pour devenir éco-conseillère. En parallèle, elle développe le projet DEC!DE qui prendra son vrai envol grâce à la rencontre avec Manon, en octobre 2020. Passionnée par l'éducation et le concept du nudge, Marion met son expertise au service du développement des outils nudge, de l'animation ainsi que de la communication de l'association.",
      },
      {
        name: 'Manon Berhin',
        position: 'Co-fondatrice & Eco-conseillère',
        image: {
          src: MariePhoto,
          srcSet: `${MariePhoto} 1x, ${MariePhoto} 2x`,
        },
        linkedin:
          'https://www.linkedin.com/in/manon-berhin-0aa82154/',
        description:
          "C'est en 2016, alors qu'elle travaille encore comme coordinatrice de projet pour une entreprise privée, que <b>Manon</b> prend pleinement conscience de l'ampleur de la crise climatique. Elle s'engage alors dans une démarche zéro déchet et s'éduque aux enjeux environnementaux. Petit à petit, ces préoccupations deviennent centrales et elle ressent le besoin de s'engager davantage. C'est pourquoi, en 2019, elle décide de changer de voie professionnelle et entame une formation d'éco-conseillère à l'Institut d'Éco-Conseil de Namur. Forte des savoirs, des rencontres et des expériences acquises lors de cette formation, elle débute un coaching chez Groupe One afin de concrétiser son projet de sensibilisation aux dérèglements climatiques. Mais c'est bien sa rencontre avec <b>Marion</b> et son projet DEC!DE qui marquera le tournant de sa vie professionnelle. Séduite par le projet, <b>Manon</b> rejoint <b>Marion</b> et à deux, elles créent l'asbl DEC!DE.",
      },
      {
        name: 'Marie Debournoux',
        position:
          'Ingénieure agronome et accompagnatrice du changement',
        image: {
          src: ManonPhoto,
          srcSet: `${ManonPhoto} 1x, ${ManonPhoto} 2x`,
        },
        linkedin:
          'https://www.linkedin.com/in/marie-debournoux-96a441155/',
        description:
          "<b>Marie</b> a toujours été fascinée par le vivant ! Portée par cet intérêt, elle fait un DUT en Industries Alimentaires et Biologiques puis poursuit son cursus avec un diplôme d'ingénieur Agronome à AgroParisTech, en alternance dans un cabinet de conseil en accompagnement du changement. Pendant 4 années, elle continue aussi de développer ses connaissances sur la crise environnementale et sociale en cours. Elle rejoint finalement DEC!DE en septembre 2023, lui permettant de s'épanouir à la croisée de ses savoir-faire et de ses valeurs.",
      },
    ],
  },
  administration: {
    title: "Le Conseil d'Administration",
    members: [
      {
        role: 'Présidente',
        name: 'Maïté Mannie',
      },
      {
        role: 'Vice-Président',
        name: 'Bernard Walschaerts',
      },
      {
        role: 'Secrétaire',
        name: 'Véronique Schmitz',
      },
      {
        role: 'Administratrice déléguée',
        name: 'Marion De Backer',
      },
      {
        role: 'Administrateur',
        name: 'Philippe Drouillon',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: '$',
      sections: [
        {
          icon: PricingBasic,
          title: 'Basic',
          price: '9.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '2',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy basic plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingAdvanced,
          title: 'Advanced',
          price: '19.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '5',
            },
            {
              text: 'estimates per month',
              prefix: '20',
            },
            {
              text: 'invoices per month',
              prefix: '20',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy advanced plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingExpert,
          title: 'Expert',
          price: '29.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: 'Unlimited',
            },
            {
              text: 'invoices per month',
              prefix: 'Unlimited',
            },
            {
              text: 'support',
              prefix: 'Priority',
            },
          ],
          button: {
            text: 'Buy expert plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  blog: {
    title: 'Actus',
    text: 'TO DO: sélectionner posts insta (Marion ? :))',
    articles: [
      {
        url: '#',
        src: Article1,
        srcSet: `${Article1} 1x, ${Article12x} 2x`,
        date: 'Today',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text:
          'Nullam sed tellus nec arcu mollis iaculis. Aliquam eget velit a libero suscipit tempor eget at leo. Vestibulum commodo tempor gravida. Donec dictum nunc at lorem euismod, et faucibus ante consectetur. Nullam porttitor eros in ligula posuere dignissim.',
      },
      {
        url: '#',
        src: Article2,
        srcSet: `${Article2} 1x, ${Article22x} 2x`,
        date: 'Yesterday',
        title:
          'Ut ornare augue quis diam vehicula, vitae vulputate mauris',
      },
      {
        url: '#',
        src: Article3,
        srcSet: `${Article3} 1x, ${Article32x} 2x`,
        date: 'Last week',
        title:
          'Pellentesque finibus porttitor mauris, nec tempor nulla',
      },
      {
        url: '#',
        src: Article4,
        srcSet: `${Article4} 1x, ${Article42x} 2x`,
        date: '2 weeks ago',
        title: 'Phasellus ornare metus sit amet luctus bibendum',
      },
      {
        url: '#',
        src: Article5,
        srcSet: `${Article5} 1x, ${Article52x} 2x`,
        date: 'Last month',
        title: 'Donec auctor ante sit amet elit pretium condimentum',
      },
    ],
    cta: {
      label: 'Voir toutes les publications',
      href: 'https://www.instagram.com/decide_etvous/',
    },
  },
  contact: {
    title: 'Contact',
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`Adresse d'exploitation\nVillage Partenaire\n15, rue Fernand Bernier\n1060 Bruxelles\nBelgique`,
      },
      {
        icon: MobilePhone,
        text: '(0) 478 48 53 02',
      },
      {
        icon: PaperAirplane,
        text: 'contact@decideetvous.com',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://www.facebook.com/decideetvous',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/decide_etvous/',
        title: 'Instagram',
      },
      /*{
        icon: Twitter,
        href: 'https://mypags.app',
        title: 'Twitter',
      },*/
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/company/dec-de/',
        title: 'Linkedin',
      },
    ],
    mailer: {
      title: 'Envie de nous contacter ?',
      cta: 'Envoyer',
      validationSchema: Yup.object({
        name: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        // Message
        message: Yup.string().required('Required'),
        email: Yup.string()
          .email('Must be an email')
          .required('Required'),
        // date: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: encode({'form-name': 'contact', ...values}),
        })
          .then(() => {
            alert('DEC!DE vous remercie de ce message! A bientôt.');
            actions.resetForm();
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false));

        values.preventDefault();
      },
      //values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'name',
          label: 'Nom',
          placeholder: 'Martine Dupont',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'martine.dupont@email.com',
          type: 'email',
          initialValue: '',
        },
        /* {
           name: 'date',
           label: 'Date and time',
           placeholder: 'Choose',
           type: 'datetime-local',
           initialValue: '',
         },*/
      ],
    },
  },
  footer: {
    links: [
      {
        label: '🚀 by G. Gustin | L. Lepinois',
        href: 'https://guillaumegustin.com/',
      },
      {
        label: '🎨 by Coffeecream',
        href: '',
      },
    ],
  },
  copyright: '© DEC!DE ASBL',
  partners: {
    title: 'Ils nous ont fait confiance',
    partners: [
      {
        name: 'Codef',
        logo: Codef,
      },
      {
        name: 'Engie',
        logo: Engie,
      },
      {
        name: 'Gim',
        logo: Gim,
      },
      {
        name: 'Hastière',
        logo: Hastiere,
      },
      {
        name: 'Icedd',
        logo: Icedd,
      },
      {
        name: 'Uliege',
        logo: Uliege,
      },
    ],
  },
};
