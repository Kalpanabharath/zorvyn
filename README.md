# Zorvyn Dashboard

Zorvyn is a responsive dashboard application built with React and Vite. It uses Bootstrap styling and a custom Context API to manage global state such as page navigation and user roles.

## Project Overview

- React 19 with Vite
- `react-bootstrap` for responsive UI components
- `react-icons` for iconography
- `recharts` available for charting
- Global app state managed via `src/contect/AppContext.jsx`

## Key Features

- Dashboard, Transactions, and Insights pages
- Role switcher with Admin / Viewer state
- Transactions page includes admin-only add/delete controls
- Sidebar and Header navigation controlled by shared context
- Dark mode toggle in the `Header`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Context API

The app now uses React Context to manage shared state instead of prop drilling.

- `src/contect/AppContext.jsx` provides `AppProvider`
- `useAppContext()` hook is used in `Header`, `Sidebar`, `Main`, and `Transactions`
- Shared values: `activePage`, `setActivePage`, `isAdmin`, `setIsAdmin`

## Notes

- The current context file folder is `src/contect` (note the spelling). You can rename it to `src/context` if you want a more standard path.
- If the app grows, more shared state and actions can be added inside `AppProvider`.

## Project Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview built app
- `npm run lint` - lint source files
