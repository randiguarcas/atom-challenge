# Atom challenge project

This is a Express project that serves as a starting point for building web applications using the Express framework.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd express-project`
3. Install the dependencies: `yarn install`

## Usage

1. Start the server: `yarn dev`
2. Open your browser and visit `http://localhost:3000`

## Configuration

The project can be configured using environment variables. Create a `.env` file in the root directory and set the following variables:

- `PORT`: The port number on which the server should run (default is 3000).

## Structure

The project structure follows the MVC (Model-View-Controller) pattern:

- `server.ts`: Entry point of the application. Sets up the Express server and routes.
- `controllers/`: Contains the controller files that handle requests and responses.
- `routes/`: Contains the route files that define the API endpoints.
- `domain/`: Contains the core domain logic of the application.
- `infra/`: Contains infrastructure-related code, such as database connections.
- `utils/`: Contains utility functions and modules that can be shared across the application.
- `interfaces/`: Contains interfaces and type definitions used throughout the application.


## Dependencies

The main dependencies used in this project are:

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- dotenv: Loads environment variables from a `.env` file.
- Other dependencies can be found in the `package.json` file.

## Contributing

Contributions to this project are welcome. Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or suggestions, please feel free to contact the project maintainer at [rguarca18@gmail.com](mailto:rguarcas18@gmail.com).
