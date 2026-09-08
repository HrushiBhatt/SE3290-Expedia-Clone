# SE3290 Expedia Clone

## Project overview

Expedia Clone is an educational travel website inspired by Expedia. This React application combines hotel and flight browsing, destination discovery, account screens, a checkout interface, and administration pages. Redux manages application state, JSON Server supplies sample data, and Firebase supports phone authentication.

The project contains partially integrated booking flows. Checkout is a demonstration interface; it does not process payments or confirm travel reservations.

## Features

- Travel homepage with destination and date inputs and promotional banners.
- Hotel cards, price controls, sorting, and pagination components.
- Flight search inputs, listing components, and sidebar filters.
- Things to Do destination and activity discovery pages.
- Login and registration screens with Firebase phone OTP integration and local user records.
- Booking review interface with traveler and payment input fields.
- Admin dashboard with hotel and flight listing, creation, and deletion controls.

Some features require the service configuration described below or further integration.

## Tech stack

React 18, Create React App 5, React Router 6, Redux, Redux Thunk, Chakra UI, Emotion, styled-components, Axios, Firebase 9, and JSON Server.

## Installation

### 1. Prerequisites

Install Git and Node.js with npm. The repository does not pin a Node.js version. Internet access is required for dependency installation and external services.

### 2. Clone and install

```sh
git clone https://github.com/HrushiBhatt/SE3290-Expedia-Clone.git
cd SE3290-Expedia-Clone
npm ci
```

For an existing checkout, run `npm ci` from the project root.

### 3. Start the sample API

The project declares a JSON Server 1.0 beta dependency, while existing requests use the older query syntax. For compatibility with those requests, run this pinned version from the project root:

```sh
npx --yes json-server@0.17.4 --watch data/db.json --port 8080
```

Keep the terminal open. The API runs at `http://localhost:8080` and exposes `/users`, `/hotel`, `/flight`, `/hotelcart`, `/flightcart`, `/giftcards`, and `/Things_todo`. API writes modify `data/db.json`.

Alternatively, install the compatible version locally and use the existing script:

```sh
npm install json-server@0.17.4
npm run server
```

This alternative updates the package manifest and lockfile.

### 4. Configure local API requests

API URLs are written directly in source files. Starting the local API does not automatically redirect requests that use other servers.

| Source file | Current target | Local setup |
| --- | --- | --- |
| `src/features/auth/state/auth.action.js` | `localhost:8080/users` | Already local. |
| `src/features/admin/state/flights/action.js` | `localhost:8080/flight` | Already local. |
| `src/features/admin/state/hotels/action.js` | `localhost:8080/hotel` | Already local. |
| `src/features/stays/state/action.js` | `happy-sunglasses-eel.cyclic.app/hotel` | Replace the remote origin with `http://localhost:8080`. |
| `src/features/flights/FlightList.jsx` | `makemytrip-api-data.onrender.com/flight` | Replace the remote origin with `http://localhost:8080`. |
| `src/features/flights/FlightCard.jsx` | `localhost:8000/flightcart` | Change port `8000` to `8080`. |

These adjustments connect the listed requests to local sample data; they do not resolve all unfinished application behavior. Availability of the original remote APIs has not been verified.

### 5. Configure authentication when needed

Firebase initialization is in `src/config/firebase.js`. To use your own Firebase project, replace the web app configuration and configure Phone authentication and the permitted development domain in Firebase. OTP flows need a working Firebase setup; JSON Server does not provide SMS verification.

### 6. Start the frontend

In a second terminal at the project root:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000). Keep both processes running during development.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the React development server. |
| `npm run server` | Start the API on port 8080 using `data/db.json` and the installed JSON Server version. |
| `npm run build` | Create a production frontend bundle in `build/`. |
| `npm test` | Run the test runner in watch mode. |

The existing `src/app/App.test.js` still checks for the default “learn react” text and needs updating for this application. The frontend build does not bundle the API or Firebase services.

## Project structure

```text
data/
  db.json                   Sample JSON Server database
public/                     Public assets and HTML entry point
src/
  app/                      App shell, routes, Redux store, theme, and app tests
  assets/                   Assets imported by application code
  components/               Shared UI components
    forms/                  Shared form inputs
    layout/                 Navbar and footer
  config/                   Firebase initialization and API configuration placeholder
  features/
    activities/             Things to Do screens and components
    admin/                  Administration screens and their styles
      state/
        flights/            Admin flight actions, action types, and reducer
        hotels/             Admin hotel actions, action types, and reducer
    auth/                   Login, registration, and authentication styles
      state/                Authentication actions, action types, and reducer
    checkout/               Booking review screen
    flights/                Flight search, results, cards, and styles
    home/                   Homepage
      components/           Hero, search tabs, and help components
    stays/                  Hotel search, results, filters, styles, and city data
      state/                Stay actions, action types, and reducer
  styles/                   Global application styles
  utils/                    Web vitals reporting
  index.js                  Create React App entry point and providers
  setupTests.js             Shared Jest setup
package.json                Dependencies and npm scripts
README.md                   Project documentation
```

### Organization conventions

- Keep code and styles specific to a travel feature together in `src/features/<feature>/`. Feature Redux logic belongs in its `state/` folder.
- Put reusable UI in `src/components/`; shared page layout belongs in `components/layout/`.
- Use `src/app/` for application composition: routes, the combined Redux store, the theme, and the root component.
- Use `src/config/` for service initialization. The existing `baseurl.js` is an empty placeholder; request URLs still live in feature action and component files listed above.
- Colocate component styles and tests with their code. Reserve `src/styles/` for global CSS and `src/assets/` for imported assets.
- Use lowercase directory names and PascalCase React component filenames. Keep `src/index.js`, `src/setupTests.js`, and `public/index.html` in their Create React App locations.
- Run npm commands from the repository root; sample API data lives in `data/db.json`.

Main routes include `/`, `/stay`, `/flight`, `/ThingsToDo`, `/login`, `/register`, `/checkout`, and `/admin`.