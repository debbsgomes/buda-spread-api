# Buda Spread API

This project is a REST API designed to communicate with the Buda.com API, providing functionalities to retrieve cryptocurrency data and spreads..

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Usage](#usage)
-   [Endpoints](#endpoints)
    -   [GET /spread](#get-spread)
-   [Error Handling](#error-handling)
-   [Testing](#testing)
-   [Deployment](#deployment)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

## Introduction

The Buda Spread API is a tool for interacting with the Buda.com cryptocurrency exchange. It provides endpoints to fetch current market spreads and other related data for various cryptocurrency pairs. This API is useful for developers and traders looking to integrate cryptocurrency data into their applications or trading strategies.

## Features

-   Retrieve current market spreads
-   Fetch data for specific cryptocurrency pairs
-   Simple and easy-to-use RESTful API
-   Environment variable configuration for secure API key management
-   Robust error handling and status codes

## Technologies

-   **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express.js**: A minimal and flexible Node.js web application framework.
-   **Axios**: A promise-based HTTP client for making requests to the Buda.com API.
-   **dotenv**: A module that loads environment variables from a `.env` file into `process.env`.

## Installation

To set up the project locally:

1.  Clone the repository:
    
    bash
    
    Copiar código
    
    `git clone https://github.com/debbsgomes/buda-spread-api.git` 
    
2.  Navigate to the project directory:
    
    bash
    
    Copiar código
    
    `cd buda-spread-api` 
    
3.  Install the dependencies:
    
    bash
    
    Copiar código
    
    `npm install` 
    

## Configuration

Create a `.env` file in the root directory and add your API keys and configuration details:

env

Copiar código

`BUDA_API_KEY=your_api_key
BUDA_API_SECRET=your_api_secret` 

## Usage

To start the server, run:

bash

Copiar código

`npm start` 

The server will start on `http://localhost:3000`.

### Endpoints

#### GET /spread

-   Description: Retrieves the spread information for specified cryptocurrency pairs.
-   Parameters:
    -   `base_currency` (query parameter): The base currency code (e.g., BTC).
    -   `quote_currency` (query parameter): The quote currency code (e.g., USD).
-   Response:
    -   `spread`: The calculated spread between the bid and ask prices.
    -   `base_currency`: The base currency code.
    -   `quote_currency`: The quote currency code.
    -   `timestamp`: The timestamp of the data.

Example request:

bash

Copiar código

`curl -X GET "http://localhost:3000/spread?base_currency=BTC&quote_currency=USD"` 

Example response:

json

Copiar código

`{
  "spread": "0.01",
  "base_currency": "BTC",
  "quote_currency": "USD",
  "timestamp": "2023-08-04T12:00:00Z"
}` 

## Error Handling

The API provides error messages and appropriate HTTP status codes for different error scenarios, such as invalid parameters or issues with the Buda.com API.

Example error response:

json

Copiar código

`{
  "error": "Invalid currency pair",
  "status": 400
}` 

## Testing

To run the tests for this project:

1.  Install the testing dependencies:
    
    bash
    
    Copiar código
    
    `npm install --save-dev jest supertest` 
    
2.  Add the following scripts to your `package.json`:
    
    json
    
    Copiar código
    
    `"scripts": {
        "test": "jest"
    }` 
    
3.  Create test files in the `tests` directory and write your test cases using Jest and Supertest.

Run the tests:

bash

Copiar código

`npm test` 

## Deployment

To deploy this API, follow these steps:

1.  Choose a hosting provider (e.g., Heroku, AWS, DigitalOcean).
2.  Set up your environment variables on the hosting platform.
3.  Push your code to the hosting platform's repository.
4.  Start your application on the hosting platform.

## Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or need further assistance, please contact:

-   **Name**: Deborah Gomes
-   **Email**: debbsgomes@gmail.com
-   **GitHub**: [debbsgomes](https://github.com/debbsgomes)
