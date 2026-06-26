# CLAUDE.md

Guide à l'usage de Claude Code pour intervenir dans ce repo. Lis ce fichier en entier avant la première modification : il documente des contraintes non-évidentes (Node 16, `minify: false`, animations CSS pures…) qui font tomber le build si on les ignore.

## 1. Projet

Site vitrine de **DEC!DE ASBL** (https://decideetvous.com), association belge de formations à la transition écologique (Fresque du Climat, Nudge, RSE/ESG, ateliers d'entreprise). Audience B2B francophone (Bruxelles + Belgique). C'est une single-page Gatsby, statique, hébergée sur Vercel-like (path prefix configurable).

## 2. Stack & versions verrouillées

| Lib | Version | Pourquoi c'est figé |
|---|---|---|
| Node | **16.x** | Gatsby 2 + Webpack 4 cassent sur Node ≥ 17 (digest OpenSSL). Épinglé via `.nvmrc` (`16.20.2`) et `engines` dans `package.json`. |
| Gatsby | 2.24.67 | Migration v3+ pas faite — beaucoup de plugins en v2.x associés. |
| React | 16.13.1 | Concordant avec Gatsby 2. |
| styled-components | 5.2.0 | Toute la stylé est en CSS-in-JS. |
| polished | (via styled) | Utilisé pour `transparentize` dans `styles.js`. |
| react-helmet | 6.1.0 | Head management + JSON-LD. |
| react-scroll-parallax | — | Wrappé dans `<ParallaxProvider>` côté thème. |

**Avant tout `npm run dev` / `build`** : `nvm use 16` (ou `nvm use` puisqu'il y a un `.nvmrc`). Sinon le build saute avec une erreur OpenSSL/Webpack obscure.

## 3. Commandes

```bash
npm run dev        # gatsby develop (port 8000)
npm run now-dev    # gatsby develop -p $PORT --prefix-paths (déploiement preview)
npm run build      # gatsby build --prefix-paths
npm run serve      # gatsby serve (sur dossier public/)
npm run clean      # gatsby clean (vide .cache + public)
npm run format     # prettier sur **/*.{js,jsx,json,md}
```

Pas de tests (le script `npm test` est un placeholder qui exit 1). Pas de linter configuré au niveau CLI — les warnings ESLint passent par Gatsby. Pas de typecheck non plus (TS est dev-dep mais le code est en JSX).

## 4. Monorepo (yarn workspaces, runner npm)

```
/                          # site Gatsby (entrée: src/pages/index.jsx)
├── packages/
│   ├── common/            # @pagerland/common — composants UI génériques, hooks, utils
│   ├── icons/             # @pagerland/icons — icônes SVG (line/, monochrome/)
│   └── themes/            # @pagerland/themes — thème "Startup" (le seul utilisé)
├── src/
│   ├── pages/index.jsx    # monte le thème + sélectionne les sections affichées
│   ├── components/SEO/    # composant SEO maison (Helmet + JSON-LD)
│   └── images/            # icon.png pour le manifest
└── scripts/               # scripts ad hoc (download d'assets)
```

`yarn.lock` est resté à la racine mais le projet est devenu **npm-first**. Si tu modifies les deps, mets à jour `package-lock.json` (ne touche pas au `yarn.lock`, ou supprime-le proprement).

### Conventions d'import

Tout passe par les alias des workspaces :

```jsx
import Box from '@pagerland/common/src/components/Box';
import Button from '@pagerland/common/src/components/Button';
import Theme, { theme } from '@pagerland/themes/src/Startup';
import AngleDown from '@pagerland/icons/src/line/AngleDown';
```

Pas d'index barrel généralisé : on importe le composant par son chemin complet (visible dans tout le code existant).

## 5. Thème `Startup` — le cœur du site

`packages/themes/src/Startup/` :

```
index.jsx           # <ThemeProvider> + <ParallaxProvider> + <Global> + <SvgUtils>
theme.js            # agrège styles + composants surchargés
styles.js           # design tokens (couleurs, fonts, breakpoints, global CSS, animations)
data.jsx            # 876 lignes — TOUT le contenu du site (textes FR, images, liens)
components/         # variantes locales (Article, Avatar, Badge, Button, Card, Logo, Squares, Typography…)
containers/         # sections de la page (cf. §6)
assets/             # photos équipe, hero, logos partenaires, articles, pricing
stories/            # Storybook (non utilisé en CI)
```

### Design tokens (`styles.js`)

- **Couleurs** :
  - `primary: #00303D` (bleu nuit, identité)
  - `secondary: #aebdb4` (vert-gris doux)
  - `accent: #f2931d` (orange, CTA + surlignage `.hl`)
  - `colors.shades.{primary,secondary,accent}` : nuances pré-calculées
  - `colors.gray[0..7]` : palette neutres
- **Typo** : Google Font **Sen** (400 + 700), base 16px, line-height 1.6, couleur de texte = `#00303d`
- **Breakpoints** : `sm 450 / md 768 / lg 1170 / xl 1440` (accessibles via `breakpoints.sm` etc.)
- **Radii** : `small 12 → xxxLarge 64`
- **Shadows** : variantes `primary/secondary/accent/black` à 86 % de transparence

### Animations (très important)

`react-reveal` a été **retiré** (cf. commit `e09c9bd perf: replace react-reveal with native CSS animations`). On utilise désormais des classes CSS globales définies dans `styles.js` :

```jsx
<div className="animate-fade-in-up animate-delay-2" />
```

- Classes disponibles : `animate-fade-in-up` + `animate-delay-1` à `animate-delay-5`
- `prefers-reduced-motion: reduce` est respecté (animations désactivées)
- Pour gérer l'apparition retardée côté React, le pattern utilisé (voir `Welcome/index.jsx`) est : `useState(false)` + `requestAnimationFrame` au mount → toggle des classes

**Ne réintroduis pas `react-reveal` ni `framer-motion`.** Si une nouvelle animation est nécessaire, ajoute une `@keyframes` dans `styles.js > global` et expose une classe utilitaire.

### Surlignage

La classe globale `.hl` applique un fond dégradé orange (linéaire, 38 %) — utilisée dans les titres via `dangerouslySetInnerHTML` pour mettre en valeur certains mots.

## 6. Sections de la page

Définies dans `packages/themes/src/Startup/containers/` :

| Dossier | Monté dans `index.jsx` ? | Notes |
|---|---|---|
| `Navbar` | ✅ (position fixed) | |
| `Welcome` | ✅ `name=""` | Hero split-screen + **slideshow CSS de 13 photos** (`HeroSlideshow.jsx`) + scroll cue + hint après 8 s |
| `Partners` | ✅ `name="partners"` | **Marquee CSS pur** (set dupliqué `aria-hidden`), pas de JS — refacto récent (`14fc7f6`) |
| `Services` | ✅ `name="services"` | Renommé "Nos formations" dans la nav |
| `Agenda` | ✅ `name="agenda"` | Section ajoutée récemment |
| `About` | ✅ `name="about"` | Section "Accompagnements" + cartes harmonisées |
| `Team` | ✅ `name="team"` | Photos `Decide 68/79/89.jpg` (Marion / Manon / Marie) |
| `FAQ` | ✅ `name="faq"` | |
| `Contact` | ✅ `name="contact"` | |
| `Footer` | ✅ | Refonte 4 colonnes (`d77e38b`) |
| `Testimonials` | ❌ commenté | En attente de vrais témoignages — ne pas activer sans contenu |
| `Blog` | ❌ commenté | |
| `Administration` | ❌ (existe, non monté) | |
| `Pricing` | ❌ (existe, non monté) | |

Pour activer/désactiver une section : édite `src/pages/index.jsx` (et son import depuis `@pagerland/themes/src/Startup/containers`).

### Anatomie d'un container

Chaque container suit le même pattern (vois `Partners/index.jsx` ou `Welcome/index.jsx`) :

1. Imports `Box`, `Container`, `Typography` depuis `@pagerland/common`
2. Composants `styled.components.jsx` voisin pour les styles
3. `defaultProps` qui spread `...data.{section}` depuis `data.jsx`
4. Props typées via `PropTypes`

Le contenu (textes FR, images, liens) vit centralisé dans `packages/themes/src/Startup/data.jsx`. **Pour changer un texte ou une image, c'est là.** Pas dans les containers.

## 7. SEO, analytics, PWA

- **SEO** : `src/components/SEO/index.jsx` injecte meta description, Open Graph (`og:locale: fr_BE`), Twitter Card, JSON-LD `Organization` (adresse Bruxelles, téléphone, sameAs LinkedIn/Instagram), `geo.region: BE`. À mettre à jour si l'asso change de coordonnées.
- **`gatsby-plugin-sitemap`** + **`gatsby-plugin-robots-txt`** (host figé sur `decideetvous.com`).
- **`gatsby-plugin-manifest`** : PWA, theme color `#f2931d`, icon `src/images/icon.png`.
- **`gatsby-plugin-offline`** : service worker actif (penser à invalider en cas de changement majeur — un hard reload peut être nécessaire).
- **Analytics** :
  - Google Analytics via `gatsby-plugin-google-analytics` (env var `GOOGLE_ANALYTICS_TRACKING_ID`)
  - **Umami** injecté en `<script defer>` dans `src/pages/index.jsx` (id `43c51cd6-2c1c-48d6-b5a9-2f8bc536a939`)
- **Preconnect / dns-prefetch** déjà configurés dans `<Helmet>` pour fonts.googleapis, cloud.umami.is, calendly.com.

### Events Umami custom

Helper : `packages/common/src/utils/track.js` exporte `track(name, props)`. Safe à appeler côté SSR (no-op si `window.umami` absent), n'expose jamais d'erreur à l'UI.

```jsx
import { track } from '@pagerland/common/src/utils/track';

<button onClick={() => track('cta_calendly_click', { source: 'hero' })}>…</button>
```

Events actuellement émis (suit l'évolution si tu ajoutes/retires) :

| Event | Props | Émis depuis |
|---|---|---|
| `cta_calendly_click` | `{ source: 'navbar' \| 'hero' \| 'about_cta' \| 'contact_cta' }` | Navbar, Welcome, About, Contact |
| `brochure_download` | `{ source: 'hero' \| 'services_cta' \| 'service_modal', formation? }` | Welcome, Services (CTA + modal) |
| `contact_form_submit` | `{ status: 'success' \| 'error' }` | `data.jsx > mailer.onSubmit` |
| `contact_copy` | `{ field: 'email' \| 'phone' }` | Footer (`handleCopy`) |
| `formation_modal_open` | `{ formation: <titre> }` | Services (`openModal`) |
| `formation_book_click` | `{ formation: <titre> }` | Services modal (mailto contact@) |
| `faq_open` | `{ question: <texte> }` | FAQ (ouverture uniquement, pas fermeture) |
| `partner_click` | `{ partner: <nom> }` | Partners (chaque logo) |
| `agenda_session_click` | `{ month, year }` | Agenda (CTA session) |
| `mailto_click` | `{ source, address }` | Agenda (mailto Marie) |

**Règles** :
- Pas de PII dans les props (pas d'email/nom utilisateur). Umami est cookieless, ne casse pas ça.
- Le `source` doit identifier *d'où* on clique, pas *vers quoi*. Le `vers quoi` est déjà dans le nom de l'event.
- Pour ajouter un event, modifie le tableau ci-dessus en même temps que le code — c'est la seule vue d'ensemble.

## 8. Variables d'environnement

- `GATSBY_APP_DIR` — prefix de chemin pour les déploiements en sous-dossier
- `GOOGLE_ANALYTICS_TRACKING_ID` — id GA

`.env` chargé via `dotenv` dans `gatsby-config.js`.

## 9. Pièges connus

1. **`minify: false`** sur `gatsby-plugin-styled-components` est **obligatoire** (commentaire explicite dans `gatsby-config.js`). Le retirer casse les styles à la prod.
2. **Node 17+ casse le build** — toujours `nvm use` avant.
3. **Service worker offline** : après un changement majeur en prod, certains visiteurs voient l'ancienne version jusqu'à un hard refresh. C'est le comportement attendu de `gatsby-plugin-offline`.
4. **Pas de sourcemaps en prod** (`gatsby-plugin-no-sourcemaps`) — utile à savoir pour le debug post-déploiement.
5. **`yarn.lock` + `package-lock.json`** cohabitent — le runtime utilisé est npm, ne pas faire `yarn install` sans réfléchir (risque de désync des deps).
6. **Animations** : n'utilise PAS `react-reveal`, il a été retiré exprès. Utilise les classes utilitaires CSS de `styles.js`.

## 10. Conventions de code & PR

- **Langue** : tous les textes UI sont en **français (FR-BE)**. Commits messages et commentaires en français.
- **Convention de commits** : `feat(scope): …`, `fix: …`, `refactor: …`, `chore: …`, `perf: …`, `style: …` (cf. `git log`).
- **Branches** : `feature/<slug>` pour les évolutions, `fix/<slug>` pour les corrections. Branches `claude/*` sont des PR d'assistants — mergées via PR vers `main`.
- **Formatage** : Prettier (config par défaut, exécuté manuellement via `npm run format`).
- **Pas de tests** — toute modif visuelle doit être vérifiée à l'œil (`npm run dev`), idéalement sur mobile + desktop (breakpoints `md 768` / `lg 1170` sont les charnières).

## 11. Où chercher quoi (récap rapide)

| Besoin | Fichier |
|---|---|
| Modifier un texte / lien / image affichés | `packages/themes/src/Startup/data.jsx` |
| Changer une couleur, font, breakpoint | `packages/themes/src/Startup/styles.js` |
| Activer/désactiver une section | `src/pages/index.jsx` |
| Ajuster meta SEO / JSON-LD | `src/components/SEO/index.jsx` + `gatsby-config.js > siteMetadata` |
| Modifier la structure d'une section | `packages/themes/src/Startup/containers/<Section>/` |
| Ajouter une animation CSS globale | `packages/themes/src/Startup/styles.js > global` |
| Changer un composant UI partagé | `packages/common/src/components/<Comp>/` |
| Ajouter une icône | `packages/icons/src/{line,monochrome}/` |
