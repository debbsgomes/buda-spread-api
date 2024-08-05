# Buda Spread API

This project is a REST API designed to communicate with the Buda.com API, providing functionalities to retrieve cryptocurrency data and spreads.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [GET /spread](#get-spread)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Buda Spread API is a tool for interacting with the Buda.com cryptocurrency exchange. It provides endpoints to fetch current market spreads and other related data for various cryptocurrency pairs. This API is useful for developers and traders looking to integrate cryptocurrency data into their applications or trading strategies.

## Features

- Retrieve current market spreads
- Fetch data for specific cryptocurrency pairs
- Simple and easy-to-use RESTful API
- Environment variable configuration for secure API key management
- Robust error handling and status codes

## Technologies

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **Axios**: A promise-based HTTP client for making requests to the Buda.com API.
- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`.

## Installation

To set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/debbsgomes/buda-spread-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd buda-spread-api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory and add your API keys and configuration details:

```env
BUDA_API_KEY=your_api_key
BUDA_API_SECRET=your_api_secret
