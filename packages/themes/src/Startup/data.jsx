import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import LinkedinAlt from '@pagerland/icons/src/monochrome/LinkedinAlt';

import Building from '@pagerland/icons/src/line/Building';
import Brain from '@pagerland/icons/src/line/Brain';
import UsersAlt from '@pagerland/icons/src/line/UsersAlt';

import * as Yup from 'yup';

import { track } from '@pagerland/common/src/utils/track';

import Hero46 from './assets/hero/decide-46.jpg';
import Hero47 from './assets/hero/decide-47.jpg';
import Hero48 from './assets/hero/decide-48.jpg';
import Hero94 from './assets/hero/decide-94.jpg';
import Hero110 from './assets/hero/decide-110.jpg';
import Hero117 from './assets/hero/decide-117.jpg';
import Hero124 from './assets/hero/decide-124.jpg';
import Hero139 from './assets/hero/decide-139.jpg';
import Hero140 from './assets/hero/decide-140.jpg';
import Hero154 from './assets/hero/decide-154.jpg';
import Hero157 from './assets/hero/decide-157.jpg';
import Hero162 from './assets/hero/decide-162.jpg';
import Hero176 from './assets/hero/decide-176.jpg';

import Avatar2 from './assets/avatars/avatar_backer.jpeg';
import Avatar22x from './assets/avatars/avatar_backer.jpeg';
import Avatar3 from './assets/avatars/avatar_berhin.jpeg';
import Avatar32x from './assets/avatars/avatar_berhin.jpeg';

import Avatar5 from './assets/avatars/avatar_marie.jpg';
import Avatar52x from './assets/avatars/avatar_marie.jpg';

import NudgeImage from './assets/nudge-decide.jpeg';

import Codef from './assets/codef.png';
import Engie from './assets/engie.png';
import Gim from './assets/gim.png';
import Hastiere from './assets/hastiere.png';
import Icedd from './assets/icedd.png';
import Uliege from './assets/uliege.png';
import LoterieNationale from './assets/loterie-nationale.png';

import GroupeOne from './assets/partners/groupe-one.webp';
import ClimateVoices from './assets/partners/climate-voices.svg';
import ZeroWasteBelgium from './assets/partners/zero-waste-belgium.svg';
import Association21 from './assets/partners/association-21.png';
import InstitutEcoConseil from './assets/partners/institut-eco-conseil.png';
import ServiceCitoyen from './assets/partners/service-citoyen.jpg';
import Bruxeo from './assets/partners/bruxeo.svg';
import Condorcet from './assets/partners/condorcet.png';
import Inbw from './assets/partners/inbw.png';
import MjVerte from './assets/partners/mj-verte.png';
import Partenamut from './assets/partners/partenamut.svg';
import He2b from './assets/partners/he2b.svg';
import Helha from './assets/partners/helha.svg';

// Workshop images (téléchargées via scripts/download-workshop-images.sh)
import WorkshopFresque from './assets/workshop-fresque.webp';
import WorkshopNudge from './assets/workshop-nudge.webp';
import WorkshopMobiliser from './assets/workshop-mobiliser.webp';
import WorkshopNumerique from './assets/workshop-numerique.webp';
import WorkshopEvenements from './assets/rechauffe-ambiance.webp';

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

const heroImages = [
  { src: Hero124, alt: "L'équipe de DEC!DE ASBL, trois fondatrices côte à côte" },
  { src: Hero140, alt: 'Atelier Jeu de la Ficelle : deux participantes étudient une carte autour de la table' },
  { src: Hero154, alt: 'Participante attentive durant un atelier collaboratif DEC!DE' },
  { src: Hero176, alt: 'Formatrice DEC!DE animant une session au tableau devant un groupe' },
  { src: Hero162, alt: 'Gros plan sur le Jeu de la Ficelle : pelote de ficelle et carte d’atelier en mains' },
  { src: Hero46, alt: 'Trois collaboratrices en séance de travail autour d’un ordinateur portable' },
  { src: Hero47, alt: 'Préparation d’atelier : prise de notes manuscrites concentrée' },
  { src: Hero48, alt: 'Animatrice DEC!DE en échange convivial autour d’une table de travail' },
  { src: Hero94, alt: 'Portrait noir et blanc d’une co-fondatrice de DEC!DE ASBL' },
  { src: Hero110, alt: 'Portrait posé d’une membre de l’équipe DEC!DE en costume bleu' },
  { src: Hero117, alt: 'Portrait en noir et blanc d’une co-fondatrice de DEC!DE en lumière naturelle' },
  { src: Hero139, alt: 'Lecture attentive d’une fiche d’atelier durant une session DEC!DE' },
  { src: Hero157, alt: 'Trois participantes en pleine réflexion collective autour de fiches d’atelier' },
];

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
        label: 'Nos formations',
      },
      {
        to: 'about',
        label: 'Accompagnements',
      },
      {
        to: 'team',
        label: "L'équipe",
      },
      {
        to: 'faq',
        label: 'FAQ',
      },
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
    title: {
      __html: "Le coup de pouce dont l'écologie a <span class=\"hl\">besoin</span>",
    },
    text: {
      __html:
        "DEC!DE <b><span class=\"hl\">sensibilise et forme</span></b> les organisations aux enjeux environnementaux et les <b><span class=\"hl\">accompagne</span></b> dans l'intégration de la durabilité dans leur stratégie ainsi que dans la mise en place de dynamiques collectives pour mener à bien les projets de transition.",
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
    images: heroImages,
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
    title: 'Nos formations',
    subtitle: 'Sur mesure, dans votre organisation',
    text: {
      __html: 'Des modules thématiques pratiques et immersifs pour comprendre et agir.<br/>D\'une introduction à une exploration approfondie.<br/>De 1h30 à deux journées.',
    },

    services: [
      {
        icon: WorkshopFresque,
        title: 'La Fresque du Climat',
        text: {
          __html: 'Comprendre les enjeux climatiques et leurs interconnexions',
        },
        details: {
          longDescription: "Cette formation permet à chacun·e de comprendre le fonctionnement, l'ampleur et la complexité des enjeux liés aux dérèglements climatiques. À la suite de l'animation, nous abordons les questions liées à l'effondrement de la biodiversité et introduisons une réflexion autour des moyens à notre disposition pour nous mettre en action collectivement. Le débriefing est adapté en fonction de vos besoins.",
          duration: '3h',
          participants: 'Entre 6 et 15 personnes',
          link: 'https://www.fresqueduclimat.org',
        },
      },
      {
        icon: WorkshopNudge,
        title: 'Nudge',
        text: {
          __html: 'Introduction aux sciences comportementales et découverte du concept',
        },
        details: {
          longDescription: "Le nudge, traduit « coup de pouce », tente de guider les individus dans leur prise de décisions sans les contraindre ou les obliger, et donc en maintenant leur liberté de choisir. Cette formation vise à vulgariser les sciences de l'économie comportementale, à théoriser le concept de nudge et à en créer un ensemble.",
          duration: 'De 1h à 1 journée',
          participants: "Jusqu'à 20 personnes",
        },
      },
      {
        icon: WorkshopMobiliser,
        title: 'Mobiliser ses collègues',
        text: {
          __html: 'Comprendre les fondamentaux de la conduite du changement pour réussir à mobiliser ses collègues autour des projets de durabilité',
        },
        details: {
          longDescription: "Durant cette formation, nous aborderons les mécanismes psychologiques à l'œuvre lors d'un processus de changement et qui freinent la mise en place des projets de durabilité. Vous repartirez avec des outils concrets afin d'accompagner vos collègues vers une transition fluide.",
          duration: '2h',
          participants: "Jusqu'à 20 personnes",
        },
      },
      {
        icon: WorkshopNumerique,
        title: 'Numérique',
        text: {
          __html: 'Explorer l\'impact environnemental du numérique et de l\'IA',
        },
        details: {
          longDescription: "Cet atelier met en lumière la matérialité, souvent dissimulée, du monde numérique. Il rend visibles ses impacts sociétaux, environnementaux et sociaux et met en évidence les ordres de grandeurs permettant d'identifier les bonnes pratiques.",
          duration: '3h',
          participants: 'Entre 6 et 15 personnes',
        },
      },
      {
        icon: WorkshopEvenements,
        title: 'Réchauffe l\'ambiance, pas la planète',
        text: {
          __html: 'Un spectacle immersif et participatif qui déconstruit les idées reçues et traverse les questions du climat',
        },
        details: {
          longDescription: "Ce spectacle itinérant permet de découvrir les enjeux autour du climat de manière innovante. Mélange de théâtre, de cinéma et de témoignages d'experts, il aborde notre rapport aux bouleversements climatiques et invite à déconstruire les idées reçues sur les grands thèmes qui traversent la question du climat : risques, démocratie, géopolitique, économie…",
          partnership: "En partenariat avec Climate Voices et la compagnie de théâtre « Histoire Publique »",
          participants: '50 personnes (jusqu\'à 2 représentations par jour)',
          format: "Peut aussi être donné en format conférence",
          logistics: "Espace scénique 5m × 7m requis. Salle au rez-de-chaussée (le matériel est lourd). Montage 1h, démontage 1h, arrivée 1h-1h30 avant.",
        },
      },
    ],

    bottomText: 'Découvrez l\'ensemble de nos formations',
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
  agenda: {
    title: 'Nos formations inter-entreprises',
    subtitle: 'Trois thématiques, trois dates à Bruxelles',
    text: {
      __html:
        "Trois formations sur trois thématiques différentes. Les formations inter-entreprises permettent de se former et s'outiller sur un sujet spécifique afin de passer à l'action, tout en rencontrant d'autres acteurs et en partageant ses défis et ses réussites.",
    },
    contactNote: 'Des questions sur ces formations ?',
    contactLabel: 'Contactez Marie',
    contactHref: 'mailto:marie@decideetvous.com',
    sessions: [
      {
        title: 'Embarquez vos collègues dans la transition',
        text:
          "Embarquer ses collaborateurs, c'est le levier le plus puissant pour transformer durablement les pratiques. Cette formation associe apports théoriques et outils actionnables pour faire de votre stratégie durabilité une aventure humaine, fédératrice et enthousiasmante.",
        month: 'Septembre',
        year: '2026',
        days: '28 & 29',
        endDate: '2026-09-29',
        href: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=zue7Lmj_4U-RpAJIZJgcE_0FhWxDdvxBo5ScSwIfchVUMU1GQTlWRjhCTlQwTU1KRERBR0o0SThUTS4u&route=shorturl',
      },
      {
        title: "Fresque de l'Entreprise Régénérative",
        text:
          "Et si votre entreprise devenait un acteur au service du vivant ? Cette fresque interactive vous plonge au cœur des interdépendances entre votre activité et les écosystèmes humains et naturels, puis construit avec vous un plan d'action concret pour amorcer une transformation durable.",
        month: 'Octobre',
        year: '2026',
        days: '20',
        endDate: '2026-10-20',
        href: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=zue7Lmj_4U-RpAJIZJgcE_0FhWxDdvxBo5ScSwIfchVUNU5FN0xXQUpJNFZaWkFVSEVSTDZPVTlSMi4u&route=shorturl',
      },
      {
        title: 'Numérique & IA : la matérialité cachée',
        text:
          "Cette formation lève le voile sur les impacts invisibles du numérique et de l'IA, donne des repères chiffrés pour distinguer les vraies bonnes pratiques, et aide à bâtir un plan d'action sur mesure pour vos usages professionnels.",
        month: 'Décembre',
        year: '2026',
        days: '3',
        endDate: '2026-12-03',
        href: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=zue7Lmj_4U-RpAJIZJgcE_0FhWxDdvxBo5ScSwIfchVUNU5FN0xXQUpJNFZaWkFVSEVSTDZPVTlSMi4u&route=shorturl',
      },
    ],
    sessionCtaLabel: "S'inscrire",
    sessionCtaHref: '#',
    info: {
      location: 'Village Partenaire (Bruxelles)',
      capacity: 'Maximum 15 places',
      audience: 'Chargés de projets durables et responsables RSE',
    },
  },
  about: {
    title: 'Accompagner le changement dans votre structure',
    text: {
      __html: "Notre équipe vous guide dans vos démarches RSE, ESG en mettant au centre l'humain et avec des outils concrets.",
    },
    
    services: [
      {
        icon: Building,
        title: "Accompagnement RSE / ESG",
        description: "Diagnostic, stratégie et mise en œuvre de votre démarche RSE adaptée aux enjeux de votre entreprise.",
        features: [
          "Audit",
          "Bilan Carbone",
          "Analyse comportementale",
          "Plan d'action",
          "Suivi",
          "Rapport"
        ]
      },
      {
        icon: Brain,
        title: "Nudge",
        description: "Mise en place de dispositifs nudge pour inciter un changement de comportement",
        features: [
          "Audit",
          "Formation",
          "Développement",
          "Mise en place"
        ]
      },
      {
        icon: UsersAlt,
        title: "Dynamiques collectives",
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
      items: [
        "Des connaissances approfondies des enjeux de la durabilité",
        "Une approche systémique basée sur les sciences comportementales",
      ],
      highlightText: "Un accompagnement sur mesure ? C'est possible !",
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
    title: 'Une équipe <span class="hl">engagée</span>',
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
        email: 'marion@decideetvous.com',
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
        email: 'manon@decideetvous.com',
        description: "Après une carrière dans le secteur privé, Manon se réoriente vers l'éco-conseil. Elle apporte son expertise d'accompagnement humain et stratégique des transitions écologiques et organisationnelles, fondé sur l'analyse, la conception de solutions sur mesure et l'évolution des représentations et des modes de pensée.",
      },
      {
        name: 'Marie Debournoux',
        position: 'Ingénieure agronome',
        image: {
          src: ManonPhoto,
          srcSet: `${ManonPhoto} 1x, ${ManonPhoto} 2x`,
        },
        linkedin: 'https://www.linkedin.com/in/marie-debournoux-96a441155/',
        email: 'marie@decideetvous.com',
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
      title: 'Passez à l\'action <span class="hl">maintenant</span>',
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
            track('contact_form_submit', { status: 'success' });
            alert('DEC!DE vous remercie de ce message ! À bientôt.');
            actions.resetForm();
          })
          .catch(() => {
            track('contact_form_submit', { status: 'error' });
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
        label: 'Accueil',
        href: '#',
      },
      {
        label: 'Nos formations',
        href: '#services',
      },
      {
        label: 'Prochaines dates',
        href: '#agenda',
      },
      {
        label: 'Accompagnements',
        href: '#about',
      },
      {
        label: "L'équipe",
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
      title: "Conseil d'administration",
      members: [
        {
          name: 'Maïté Mannie',
          role: 'Présidente',
        },
        {
          name: 'Bernard Walschaerts',
          role: 'Vice-Président',
        },
        {
          name: 'Véronique Schmitz',
          role: 'Secrétaire',
        },
        {
          name: 'Marion De Backer',
          role: 'Administratrice déléguée',
        },
        {
          name: 'Philippe Drouillon',
          role: 'Administrateur',
        },
      ],
    },
    copyright: '© 2026 DEC!DE ASBL · Tous droits réservés.',
    legalLinks: [
      {
        label: 'by Guillaume Gustin',
        href: 'https://guillaumegustin.com/',
      },
      {
        label: '& Loïc Lepinois',
        href: 'https://lepinois.dev',
      },
    ],
  },
  faq: {
    title: 'Vos questions, <span class="hl">nos réponses</span>',
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
    title: 'Des entreprises et structures qui <span class="hl">passent à l\'action</span>',
    partners: [
      {
        name: 'Codef',
        logo: Codef,
        url: 'https://www.codef.be/',
      },
      {
        name: 'Loterie Nationale',
        logo: LoterieNationale,
        url: 'https://www.loterie-nationale.be/',
      },
      {
        name: 'Engie',
        logo: Engie,
        url: 'https://www.engie.be/',
      },
      {
        name: 'Gim',
        logo: Gim,
        url: 'https://www.gim.be/',
      },
      {
        name: 'Hastière',
        logo: Hastiere,
        url: 'https://www.hastiere.be/',
      },
      {
        name: 'Icedd',
        logo: Icedd,
        url: 'https://www.icedd.be/',
      },
      {
        name: 'Uliege',
        logo: Uliege,
        url: 'https://www.uliege.be/',
      },
    ],
  },
  partnersSecondary: {
    partners: [
      { name: 'Groupe One', logo: GroupeOne, url: 'https://www.groupeone.be/' },
      { name: 'Climate Voices', logo: ClimateVoices, url: 'https://www.climatevoices.eu/' },
      { name: 'Zero Waste Belgium', logo: ZeroWasteBelgium, url: 'https://www.zerowastebelgium.org/' },
      { name: 'Association 21', logo: Association21, url: 'https://www.associations21.org/' },
      { name: 'Institut Eco-Conseil', logo: InstitutEcoConseil, url: 'https://www.eco-conseil.be/' },
      { name: 'Service Citoyen', logo: ServiceCitoyen, url: 'https://www.service-citoyen.be/' },
      { name: 'Bruxeo', logo: Bruxeo, url: 'https://www.bruxeo.be/' },
      { name: 'Condorcet', logo: Condorcet, url: 'https://www.condorcet.be/' },
      { name: 'INBW', logo: Inbw, url: 'https://www.inbw.be/' },
      { name: 'MJ Verte', logo: MjVerte, url: 'https://www.mjverte.be/' },
      { name: 'Partenamut', logo: Partenamut, url: 'https://www.partenamut.be/' },
      { name: 'HE2B', logo: He2b, url: 'https://www.he2b.be/' },
      { name: 'HELHa', logo: Helha, url: 'https://www.helha.be/' },
    ],
  },
};
