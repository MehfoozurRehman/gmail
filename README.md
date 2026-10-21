# Gmail Clone

A Gmail-inspired webmail interface built with React, Redux Toolkit, Material-UI and Firebase Firestore.

**Status:** In progress. Composing a message writes it to Firestore and the inbox list updates live, but the open-message view shows blank fields because of a selector bug, and search, folders and the header actions are not wired up.

## The problem

The project recreates the core Gmail layout: a header, a sidebar, a list of messages, a reading view and a compose window. The messages are stored in a Firestore collection, so the list reflects new messages as they are added. The code does not describe any further purpose.

## What it does

- **Inbox list:** subscribes to the `email` Firestore collection, ordered by timestamp, and renders each message with its recipient, subject and body preview.
- **Compose:** a modal form with To, Subject and Message fields. All three are required (react-hook-form), and a valid message is saved as a new document with a server-generated timestamp.
- **Message view:** clicking a row navigates to `/mail` and stores the selected message in Redux. The reading pane is laid out, but it does not currently show the message (see below).
- **Sidebar:** the Compose button opens the compose modal. The other sidebar entries are visual only.

## How it's built

- React 17 bootstrapped with Create React App (`react-scripts` 4.0.3).
- Redux Toolkit with one store and one `mail` slice (`src/features/mailSlice.js`) that holds the compose-open flag and the selected message.
- Material-UI v4 (`@material-ui/core` and `@material-ui/icons`), with a CSS file per component.
- Firebase 8 (the compatibility `firebase` package). `src/firebase.js` initializes Firestore and exports the database handle.
- React Router v5 for the `/` and `/mail` routes.

Two decisions are visible in the code. The compose modal's open state lives in Redux, so `App.js` renders it from a single place rather than from the sidebar. The inbox list does not go through Redux. `EmailList` subscribes to the Firestore snapshot directly and keeps the messages in local component state.

## Running it locally

```
npm install
npm start       # http://localhost:3000
npm run build
npm test        # script exists, but the repo has no test files
```

The scripts set `NODE_OPTIONS=--openssl-legacy-provider`. Firebase settings are in `src/firebase.js`.

## What's left

- Opening a message shows blank fields. `selectOpenMail` in `mailSlice.js` returns `state.mail.selectMail` (the action creator) instead of `state.mail.selectedMail`.
- The header search input has no handler.
- Sidebar folders (Inbox, Starred, Snoozed and others) do not filter anything, and their counts are hardcoded to 54.
- Toolbar buttons, row stars and checkboxes are display-only.
- The Google sign-in provider is created in `firebase.js`, but no sign-in flow uses it. Sent messages are not tied to a user.
- Firebase configuration is committed in `src/firebase.js` and is not read from environment variables.
- The `EmailList` snapshot listener is never unsubscribed when the component unmounts.
- There are no responsive breakpoints. The CSS contains no media queries.
- There are no test files, although a Jest setup file and a test script are present.
- The header logo is loaded from an external image URL.
- The stack is dated: React 17, react-scripts 4.0.3 and Material-UI v4.

MIT licensed (see `LICENSE`).
