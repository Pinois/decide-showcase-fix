import {smoothLinkProps} from '@pagerland/common/src/utils';
import {Link} from 'react-scroll';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';

import FacebookF from '@pagerland/icons/src/monochrome/FacebookF';
import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';
import LinkedinAlt from '@pagerland/icons/src/monochrome/LinkedinAlt';

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
import LoterieNationale from './assets/loterie-nationale.svg';

// Workshop images (téléchargées via scripts/download-workshop-images.sh)
import WorkshopFresque from './assets/workshop-fresque.jpg';
import WorkshopNudge from './assets/workshop-nudge.jpg';
import WorkshopMobiliser from './assets/workshop-mobiliser.jpg';
import WorkshopNumerique from './assets/workshop-numerique.jpg';
import WorkshopEvenements from './assets/workshop-evenements.jpg';

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
        label: 'Ateliers',
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
        label: 'Réservez un appel découverte (30 min)',
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
    title: 'Nos ateliers',
    text: {
      __html: 'Des modules pratiques et immersifs pour comprendre/ressentir/agir, d\'une introduction à une exploration de la thématique approfondie, de 1h30 à 1 jour.',
    },

    services: [
      {
        icon: WorkshopFresque,
        title: 'La Fresque du Climat',
        duration: '3h',
        text: {
          __html: 'Comprendre les enjeux climatiques et leurs interconnexions',
        },
      },
      {
        icon: WorkshopNudge,
        title: 'Nudge',
        duration: '2h',
        text: {
          __html: 'Activer des leviers psychologiques pour changer les comportements',
        },
      },
      {
        icon: WorkshopMobiliser,
        title: 'Mobiliser ses collègues',
        duration: '4h',
        text: {
          __html: 'Fédérer une équipe autour d\'actions concrètes',
        },
      },
      {
        icon: WorkshopNumerique,
        title: 'Numérique : un monde dématérialisé ?',
        duration: '6h',
        text: {
          __html: 'Explorer l\'impact environnemental du numérique',
        },
      },
      {
        icon: WorkshopEvenements,
        title: 'Réchauffe l\'ambiance, pas la planète',
        duration: '3h',
        text: {
          __html: 'Rendre ses événements plus durables',
        },
      },
    ],

    bottomText: 'Découvrez l\'ensemble de nos ateliers',
    cta: {
      label: 'Télécharger notre brochure',
      as: 'a',
      href: 'https://github.com/Pinois/files/raw/main/Catalogue-DECIDE-2025.pdf',
      target: '_blank',
      rel: 'noopener noreferrer',
      variant: 'primary',
    },
    /* cta: {
       label: 'En savoir plus',
       href:
         'To Do',
     }, */
  },
  about: {
    title: "Accompagner le changement dans votre structure",
    text: {
      __html: "Notre équipe vous guide dans vos démarches RSE, ESG en mettant au centre l'humain et avec des outils concrets.",
    },
    
    services: [
      {
        icon: "🏢",
        title: "Accompagnement RSE / ESG",
        description: "Diagnostic, stratégie et mise en œuvre de votre démarche RSE adaptée aux enjeux de votre entreprise.",
        features: [
          "Audit",
          "Bilan Carbone",
          "Analyse Comportementale",
          "Plan d'action",
          "Suivi",
          "Rapport"
        ]
      },
      {
        icon: "🧠",
        title: "Nudge",
        description: "Une approche douce pour inciter un changement de comportement",
        features: [
          "Audit",
          "Formation",
          "Développement",
          "Mise en place"
        ]
      },
      {
        icon: "🎓",
        title: "Green Team",
        description: "Formation et accompagnement à la création de dynamique collective",
        features: [
          "Mobilisation",
          "Formation",
          "Projets pratiques",
          "Suivi"
        ]
      }
    ],
    
    expertise: {
      title: "Nos expertises",
      text: "Une approche systémique basée sur les sciences comportementales afin de créer des dynamiques collectives pour mobiliser vos collaborateurs, ainsi qu'une connaissance généralisée des enjeux de la durabilité",
      highlight: "<span role=\"img\" aria-label=\"lightbulb\">💡</span> Un accompagnement sur mesure ? C'est possible !",
      image: {
        src: NudgeImage,
        srcSet: `${NudgeImage} 1x, ${NudgeImage} 2x`,
      }
    },
    
    cta: {
      label: 'Réserver un appel découverte (30 min)',
      as: 'a',
      href: 'https://calendly.com/marion-decideetvous/30min',
      target: '_blank',
      rel: 'noopener noreferrer',
      variant: 'primary',
    },
  },
  testimonials: {
    title: "Ils nous ont fait confiance",
    text: {
      __html: "Entreprises, administrations, écoles… nous agissons ensemble pour la transition.",
    },
    testimonials: [
      {
        quote: "Les ateliers DEC!DE ont créé un vrai déclic au sein de notre équipe. C'est concret, bienveillant, et ça donne envie d'agir.",
        author: "Sophie Laurent",
        function: "Responsable RSE – Engie"
      },
      {
        quote: "Une approche pédagogique innovante qui a permis de mobiliser l'ensemble du personnel autour des enjeux environnementaux.",
        author: "Marc Dubois",
        function: "Directeur – ICEDD"
      },
      {
        quote: "DEC!DE nous a accompagnés avec professionnalisme dans notre démarche de transition écologique. Une vraie réussite !",
        author: "Anne Lemaire",
        function: "DRH – Codef"
      }
    ]
  },
  team: {
    title: "Une équipe engagée",
    text: {
      __html: "Trois profils complémentaires pour vous accompagner avec bienveillance et expertise.",
    },
    members: [
      {
        name: 'Marion De Backer',
        position: 'Co-fondatrice, éco-conseillère',
        image: {
          src: MarionPhoto,
          srcSet: `${MarionPhoto} 1x, ${MarionPhoto} 2x`,
        },
        linkedin: 'https://www.linkedin.com/in/marion-de-backer1618/',
        description: "Experte en nudge marketing et changements comportementaux, Marion accompagne les organisations dans leur transformation écologique avec des approches innovantes et participatives.",
      },
      {
        name: 'Manon Berhin',
        position: 'Co-fondatrice, éco-conseillère',
        image: {
          src: MariePhoto,
          srcSet: `${MariePhoto} 1x, ${MariePhoto} 2x`,
        },
        linkedin: 'https://www.linkedin.com/in/manon-berhin-0aa82154/',
        description: "Après une carrière dans le secteur privé, Manon s'est réorientée vers l'accompagnement environnemental. Elle apporte son expertise business et sa vision pragmatique des enjeux RSE.",
      },
      {
        name: 'Marie Debournoux',
        position: 'Ingénieure agronome',
        image: {
          src: ManonPhoto,
          srcSet: `${ManonPhoto} 1x, ${ManonPhoto} 2x`,
        },
        linkedin: 'https://www.linkedin.com/in/marie-debournoux-96a441155/',
        description: "Spécialiste de l'accompagnement du changement, Marie combine expertise technique et approche pédagogique pour faciliter la transition écologique des organisations.",
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
    cta: {
      title: 'Passez à l\'action maintenant',
      text: 'Transformez votre entreprise avec nos formations sur mesure en développement durable.',
      features: [
        'Expertise reconnue',
        'Accompagnement personnalisé',
        'Résultats mesurables'
      ],
      button: {
        label: 'Réserver un appel',
        href: 'https://calendly.com/marion-decideetvous/30min'
      }
    },
    mailer: {
      title: 'Contactez-nous',
      cta: 'Envoyer',
      validationSchema: Yup.object({
        name: Yup.string()
          .max(25, 'Maximum 25 caractères')
          .required('Requis'),
        // Message
        message: Yup.string().required('Requis'),
        email: Yup.string()
          .email('Email invalide')
          .required('Requis'),
        // date: Yup.string().required('Requis'),
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
            alert('DEC!DE vous remercie de ce message ! À bientôt.');
            actions.resetForm();
          })
          .catch(() => {
            alert('Une erreur est survenue. Veuillez réessayer.');
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
  newFooter: {
    logo: 'DEC!DE',
    baseline: 'Formations durables pour des entreprises responsables',
    socialLinks: [
      {
        icon: LinkedinAlt,
        href: 'https://www.linkedin.com/company/dec-de/',
        title: 'LinkedIn',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/decide_etvous/',
        title: 'Instagram',
      },
    ],
    workshops: [
      {
        label: 'Fresques du climat',
        href: '#services',
      },
      {
        label: 'Nudge',
        href: '#services',
      },
      {
        label: 'Accompagnement RSE',
        href: '#about',
      },
      {
        label: 'Green Team',
        href: '#about',
      },
    ],
    company: [
      {
        label: 'À propos',
        href: '#about',
      },
      {
        label: 'Notre équipe',
        href: '#team',
      },
      {
        label: 'FAQ',
        href: '#faq',
      },
      {
        label: 'Contact',
        href: '#contact',
      },
    ],
    contact: {
      email: 'contact@decideetvous.com',
      phone: '+32 (0) 478 48 53 02',
      address: 'Bruxelles, Belgique',
    },
    administration: {
      title: 'Conseil d\'Admin.',
      members: [
        {
          name: 'M. Mannie',
          role: 'Présidente',
        },
        {
          name: 'B. Walschaerts',
          role: 'Vice-Président',
        },
        {
          name: 'V. Schmitz',
          role: 'Secrétaire',
        },
        {
          name: 'M. De Backer',
          role: 'Admin. déléguée',
        },
        {
          name: 'P. Drouillon',
          role: 'Administrateur',
        },
      ],
    },
    copyright: '© 2025 DEC!DE. Tous droits réservés.',
    legalLinks: [
      {
        label: '<span role="img" aria-label="rocket">🚀</span> by G. Gustin | L. Lepinois',
        href: 'https://guillaumegustin.com/',
      },
      {
        label: '<span role="img" aria-label="art">🎨</span> by Coffeecream',
        href: '#',
      },
    ],
  },
  faq: {
    title: 'Vos questions, nos réponses',
    faqs: [
      {
        question: 'Peut-on personnaliser les formations ?',
        answer: 'Oui, toutes nos formations sont adaptables à vos besoins spécifiques, votre secteur d\'activité et la taille de vos équipes. Nous établissons ensemble un programme sur mesure.'
      },
      {
        question: 'Est-ce que c\'est adapté à tout type d\'entreprise ?',
        answer: 'Nos formations et accompagnements conviennent aux TPE, PME, grandes entreprises et organisations publiques. Nous adaptons notre approche à votre contexte.'
      },
      {
        question: 'Quel est le coût des interventions ?',
        answer: 'Les tarifs varient selon le format, la durée et le nombre de participants. Contactez-nous pour un devis personnalisé. Des solutions de financement sont possibles.'
      },
      {
        question: 'Quels sont vos délais ?',
        answer: 'Nous pouvons généralement intervenir sous 2 à 4 semaines pour les formations, et sous 1 à 2 mois pour les accompagnements plus complets.'
      },
      {
        question: 'Quelle est la différence entre formation et accompagnement ?',
        answer: 'Les formations sont des interventions ponctuelles pour sensibiliser et former vos équipes. L\'accompagnement est un suivi sur plusieurs mois pour transformer durablement vos pratiques.'
      },
      {
        question: 'Est-ce que vous intervenez partout en Belgique ?',
        answer: 'Oui, nous intervenons dans toute la Belgique. Nos formations peuvent aussi se faire en distanciel selon vos besoins.'
      }
    ]
  },
  partners: {
    title: 'Des entreprises et structures qui passent à l\'action',
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
      {
        name: 'Loterie Nationale',
        logo: LoterieNationale,
      },
    ],
  },
};
