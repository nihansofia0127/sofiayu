# Sofia Portfolio Website

A React portfolio website with a light glassmorphism UI, responsive layout, reusable components, and a separate content file for easy editing.

## Stack

- React
- Vite
- Plain CSS
- `gh-pages` for GitHub Pages deployment

## Project structure

- `src/data/portfolioData.js`: update your name, resume URL, GitHub, LinkedIn, experience, projects, skills, and contact info here
- `src/components/`: reusable UI sections and cards
- `src/styles.css`: global styling, layout, and glassmorphism theme
- `vite.config.js`: GitHub Pages base path configuration

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the local dev server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Update your content

Edit [`src/data/portfolioData.js`](/Users/sofiayu/Desktop/Sofia_Portfolio_Website/src/data/portfolioData.js) to replace the placeholder values:

- Set your real `quickLinks` URLs for resume, GitHub, and LinkedIn
- Replace experience entries with your actual roles
- Replace project cards with your real work
- Update skills, about text, and contact email
- Set `hero.profileImage` to your image path or imported asset when ready

## Add your profile picture

There is a built-in placeholder headshot area in the hero section.

To swap in your real image:

1. Put your image in `src/assets/` or another location inside the project
2. Import it into `src/data/portfolioData.js` or use a public path
3. Set `hero.profileImage` to that image
4. Update `hero.profileAlt` with a descriptive alt label

Example:

```js
import profileImage from '../assets/profile.jpg';

export const portfolioData = {
  hero: {
    profileImage,
    profileAlt: 'Sofia Yu headshot',
  },
};
```

## GitHub Pages deployment

This project is configured for deployment to a repository named `Sofia_Portfolio_Website`.

### Before deploying

1. Create a GitHub repository named `Sofia_Portfolio_Website`
2. Push this project to that repository
3. Install dependencies:

```bash
npm install
```

4. In GitHub, open the repository settings and confirm Pages is set to deploy from the `gh-pages` branch if needed

### Deploy

Run:

```bash
npm run deploy
```

That command builds the site and publishes the `dist/` output to the `gh-pages` branch.

### If your repository name is different

Update the `base` value in [`vite.config.js`](/Users/sofiayu/Desktop/Sofia_Portfolio_Website/vite.config.js) so it matches your repo name:

```js
base: command === 'serve' ? '/' : '/your-repository-name/'
```

## Notes

- The layout is mobile-first and expands cleanly for larger screens
- The navigation collapses into a menu on smaller devices
- The design emphasizes readable text, spacing, and restrained motion over heavy effects
# sofiayu
