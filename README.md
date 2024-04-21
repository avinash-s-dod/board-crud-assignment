# Board Management Application

This project is a simple board management application built with React and Typescript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- NPM (Node Package Manager) installed with Node.js.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/avinash-s-dod/board-crud-assignment.git
   ```

2. Navigate to the project directory

  ```sh
  cd board-crud-assignment
   ```

3. Install npm packages
  ```sh
   npm i
   ```
### Running Application

1. Start the development server
  ```sh
  npm start
   ```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Project Structure

```
board-crud-assignment
|
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ logo192.png
│ ├─ logo512.png
│ ├─ manifest.json
│ └─ robots.txt
├─ README.md
├─ src
│ ├─ App.css
│ ├─ App.test.tsx
│ ├─ App.tsx
│ ├─ components
│ │ ├─ Header
│ │ │ ├─ Header.tsx
│ │ │ └─ styles.css
│ │ ├─ index.ts
│ │ ├─ Modal
│ │ │ ├─ CustomModal.tsx
│ │ │ └─ styles.css
│ │ ├─ Sidebar
│ │ │ ├─ Sidebar.tsx
│ │ │ └─ styles.css
│ │ └─ UI
│ │ ├─ index.ts
│ │ ├─ Layout.tsx
│ │ └─ PrimaryButton.tsx
│ ├─ index.css
│ ├─ index.tsx
│ ├─ logo.svg
│ ├─ pages
│ │ ├─ BoardList
│ │ │ ├─ index.tsx
│ │ │ └─ styles.css
│ │ └─ index.ts
│ ├─ react-app-env.d.ts
│ ├─ reportWebVitals.ts
│ ├─ routes.tsx
│ ├─ setupTests.ts
│ ├─ static
│ │ └─ css
│ │ └─ styles.css
│ ├─ store
│ │ ├─ actions
│ │ │ ├─ actionTypes.ts
│ │ │ └─ boardActions.ts
│ │ ├─ reducers
│ │ │ ├─ boardReducer.ts
│ │ │ └─ index.ts
│ │ ├─ rootReducer.ts
│ │ └─ types.ts
│ └─ utils
│ └─ helperFunctions.ts
└─ tsconfig.json

```
