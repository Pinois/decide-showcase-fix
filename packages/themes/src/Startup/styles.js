import { css } from 'styled-components'
import { transparentize } from 'polished'

export const space = [0, 4, 8, 16, 32, 64]

export const colors = {
  primary: '#00303D',
  //'#0C4B5B',
  secondary: '#aebdb4',
  //'#51B3A7',
  accent: '#f2931d',
  //'#F24F28',
  black: '#00303d', // TO DO, change to id blue in every container
  error: '#EB5757',
  success: '#27AE60',
  shades: {
    primary: ['#0C4B5B', '#126F87', '#1895B4', '#1EBAE1'],
    secondary: ['#51B3A7', '#75C3B9', '#98D2CB', '#BCE2DD'],
    accent: ['#F24F28', '#F57557', '#F89D87', '#FBC4B7'],
  },
  gray: [
    //'#3D4042',
    '#00303d',
    '#6E7477',
    '#A2A6A9',
    '#BDC0C2',
    '#D7D9DA',
    '#E4E6E7',
    '#F7F7F8',
    '#FFFFFF',
  ],
}

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap',
  fontFamily: "'Sen', sans-serif",
  color: '#00303d', //colors.gray[1],
  sizes: {
    base: 16,
  },
}

export const body = {
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: '#00303d', //colors.gray[0],
}

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
}

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
}

export const borderRadius = {
  small: 12,
  normal: 18,
  large: 24,
  xLarge: 28,
  xxLarge: 32,
  xxxLarge: 64,
}

export const radii = { ...borderRadius }

export const shadows = {
  primary: `0px 24px 32px ${transparentize(0.86, colors.primary)}`,
  secondary: `0px 24px 32px ${transparentize(0.86, colors.secondary)}`,
  accent: `0px 24px 32px ${transparentize(0.86, colors.accent)}`,
  black: `0px 24px 32px ${transparentize(0.86, colors.black)}`,
}

export const global = css`
  /* Animation fadeInUp pour remplacer react-reveal */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  /* Délais pour les animations en cascade */
  .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
  .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
  .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
  .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
  .animate-delay-5 { animation-delay: 0.5s; opacity: 0; }

  /* Respecter les préférences utilisateur pour réduire les animations */
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up,
    .animate-delay-1,
    .animate-delay-2,
    .animate-delay-3,
    .animate-delay-4,
    .animate-delay-5 {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }

  blockquote {
    footer {
      display: flex;
      align-items: center;
      &::before {
        display: block;
        width: 40px;
        height: 1px;
        margin-top: 2px;
        margin-right: 16px;
        content: '';
        background-color: currentColor;
      }
    }
  }
`

export const breakpoints = ['450px', '768px', '1170px', '1440px']
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0]
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1]
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2]
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3]
