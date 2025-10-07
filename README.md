# Person Site v3

Welcome to my personal site documentation!
This era of my personal site was built with:

- React + TS via Vite
- ThreeJS
- Motion

## Quick guide for those interested

- Inside the `public/` directory, you'll find files relating to the site and hosting.
- Inside the `src/` directory, you'll find source files for the React app the site runs as.

Inside `src/`, you can find:

- `assets/`: Static files required for React components.
- `components/`: React components! For those who aren't familiar, it's basically just a form of code abstraction where you create re-useable chunks of code that get imported elsewhere.
- `contexts/`: Context providers, for passing data across different parts of the React app efficiently and easily, without bloating the import tree.
- `data/`: Data the site is populated with!
- `hooks/`: Unused right now, but placed with the intention of adding React hooks later. Check back soon!
- `pages/`: Individual page elements, referenced by React Router to enable routing without harsh reloads. Could technically go into components, but I like abstracting them like this :D
- `router/`: Contains routes.ts, which tells React Router how to handle the overall site structure and what to start loading when you access a given page.
- `types/`: Where I place any new types I create for TypeScript components in the app. You could technically place these in the components and export/import them from that component if you'd like, but I like adding a types directory and then creating a path alias for ease of use during development :D
- `utils/`: Utilities directory; where I place extraneous functions, imports/exports, or anything else I expect to use in multiple places that doesn't already have a logical location.
- `main.tsx`: The root TypeScript file of the React App! This is what index.html loads to kick off the entire React app. Feel free to start here if you're exploring!
