# README <a name="readme-top"></a>

## Table of Contents

- [About Project](#about-project)
- [Built With](#built-with)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Author](#author)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [Show your support](#show-your-support)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About Project <a name="about-project"></a>

The "Hello React" app is a front-end application built with React, utilizing Vite for an enhanced development experience and TailwindCSS for styling. This app demonstrates how to fetch data from a Rails API ("Hello Rails" app) and display it. The main feature is showing a random greeting fetched from the ["Hello Rails" app](https://github.com/lily4178993/hello-rails-back-end).

## Built With <a name="built-with"></a>

- React
- Vite
- TailwindCSS

## Tech Stack <a name="tech-stack"></a>

- React: 18.2.0
- Vite: 5.0.8
- TailwindCSS: 3.4.1
- Jest: 29.7.0 - for running unit and integration tests.
- React Testing Library: 14.2.1 - for writing readable tests that work with actual DOM nodes.

## Key Features <a name="key-features"></a>

- Fetches a random greeting from the "Hello Rails" app.
- Stylish, responsive UI with TailwindCSS.
- Fast development experience with Vite.

## Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

- Node.js (specify minimum version)
- npm or yarn
- Access to the "Hello Rails" app running either locally or hosted. [Hello Rails App](https://github.com/lily4178993/hello-rails-back-end)

### Setup <a name="setup"></a>

1. Clone this repository

```bash
git clone https://github.com/lily4178993/hello-react-front-end.git
cd hello-react-front-end
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

### Install <a name="install"></a>

After cloning the repo and moving into the project directory, install the dependencies:

```bash
npm install
# or
yarn
```

### Usage <a name="usage"></a>

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:5173/` to view it in your browser.

Ensure the "Hello Rails" app is running to fetch greetings successfully. For details on running the "Hello Rails" app, refer to its [README](https://github.com/lily4178993/hello-rails-back-end).

## Tests <a name="tests"></a>

This project uses Jest alongside React Testing Library to run unit and integration tests. React Testing Library offers a robust set of tools that allow for testing components in a way that simulates user interactions more closely.

**Running Tests**

To run the test suite, execute the following command in your terminal:
```bash
npm run test
# or
yarn test
```

## Author <a name="author"></a>

- Nelly Telli - [@lily4178993](https://github.com/lily4178993/)

## Future Features <a name="future-features"></a>

- Implement additional API calls to the "Hello Rails" app.
- Enhance UI/UX with animations.

## Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/lily4178993/hello-react-front-end/issues/).

## Show your support <a name="support"></a>

Give a ⭐️ if this project helped you!

## Acknowledgements <a name="acknowledgements"></a>

- React Documentation
- TailwindCSS Documentation
- Vite Documentation
- ["Hello Rails" app](https://github.com/lily4178993/hello-rails-back-end/) for providing the API
- Microverse

## License <a name="license"></a>

This project is [MIT licensed](./LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>