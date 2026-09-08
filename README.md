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

The `server` script references JSON Server, which is missing from the declared dependencies. Run this pinned version from the project root:

```sh
npx --yes json-server@0.17.4 --watch db.json --port 8080
```

Keep the terminal open. The API runs at `http://localhost:8080` and exposes `/users`, `/hotel`, `/flight`, `/hotelcart`, `/flightcart`, `/giftcards`, and `/Things_todo`. API writes modify `db.json`.

Alternatively, install JSON Server and use the existing script:

```sh
npm install --save-dev json-server@0.17.4
npm run server
```

This alternative updates the package manifest and lockfile.

### 4. Configure local API requests

API URLs are written directly in source files. Starting the local API does not automatically redirect requests that use other servers.

| Source file | Current target | Local setup |
| --- | --- | --- |
| `src/Redux/Authantication/auth.action.js` | `localhost:8080/users` | Already local. |
| `src/Redux/AdminFlights/action.js` | `localhost:8080/flight` | Already local. |
| `src/Redux/AdminHotel/action.js` | `localhost:8080/hotel` | Already local. |
| `src/Redux/StayReducer/action.js` | `happy-sunglasses-eel.cyclic.app/hotel` | Replace the remote origin with `http://localhost:8080`. |
| `src/Pages/Flights/FlightList.jsx` | `makemytrip-api-data.onrender.com/flight` | Replace the remote origin with `http://localhost:8080`. |
| `src/Pages/Flights/FlightCard.jsx` | `localhost:8000/flightcart` | Change port `8000` to `8080`. |

These adjustments connect the listed requests to local sample data; they do not resolve all unfinished application behavior. Availability of the original remote APIs has not been verified.

### 5. Configure authentication when needed

Firebase initialization is in `src/01_firebase/config_firebase.js`. To use your own Firebase project, replace the web app configuration and configure Phone authentication and the permitted development domain in Firebase. OTP flows need a working Firebase setup; JSON Server does not provide SMS verification.

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
| `npm run server` | Start the API on port 8080 after installing JSON Server. |
| `npm run build` | Create a production frontend bundle in `build/`. |
| `npm test` | Run the test runner in watch mode. |

The existing `src/App.test.js` still checks for the default “learn react” text and needs updating for this application. The frontend build does not bundle the API or Firebase services.

## Project structure

```text
public/                 Static assets and HTML entry point
src/
  01_firebase/          Firebase initialization
  Components/           Shared navigation, footer, and homepage components
  Pages/                Travel, account, checkout, and admin screens
  Redux/                Store, actions, and reducers
  App.js                Root application component
  index.js              React entry point
db.json                 Sample JSON Server data
package.json            Dependencies and npm scripts
```

Main routes include `/`, `/stay`, `/flight`, `/ThingsToDo`, `/login`, `/register`, `/checkout`, and `/admin`.