# Monorepo with React Frontend and Symfony Backend

This repository serves as a practical demonstration of the concepts outlined in the article about "How to Eliminate CORS Friction in a Cloud-Based Development Environment workflow?"   
https://blog.dcadeau.com/monorepo-in-gitpod    

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/daliendev/monorepo-demo)

## Project Structure

The project is divided into two main parts:
1. Frontend: A React application built with Vite and TypeScript
2. Backend: A Symfony PHP application

### Frontend

The frontend is a React application created using Vite and TypeScript. It's located in the `frontend` directory.

Key Features:
- React 18.3 with TypeScript
- Vite for fast development and building
- ESLint configuration for code quality
- Proxy setup to communicate with the backend

### Backend

The backend is a Symfony 7.1 application located in the `backend` directory.

Key Features:
- Symfony 7.1 framework
- Simple API endpoint for demonstration
- Composer for dependency management

## API Communication

The frontend is configured to proxy API requests to the backend. This is set up in the Vite configuration file.

## Gitpod Configuration

This project is configured to work with Gitpod, a cloud development environment. The configuration is defined in the `.gitpod.yml` file.

This configuration automatically sets up both the frontend and backend environments when you open the project in Gitpod.

## Getting Started with Gitpod

1. Click the "Open in Gitpod" button at the top of this README.
2. Gitpod will automatically set up the development environment and start both the frontend and backend servers.
3. Once the setup is complete, you can access the frontend application via the provided Gitpod URL (it will automatically open the preview, but it may be blocked by your web browser).
4. Click the "Fetch Message from Symfony Backend" button to test the communication between frontend and backend.

## Getting Started on a local machine

1. Clone the project
2. Go to the `backend` folder, then you should generate a minimal .env file, e.g.    
```bash 
echo "APP_SECRET=$(openssl rand -hex 16)" >> .env
echo "APP_ENV=dev" >> .env` 
```
3. You may now run `composer install` and `symfony server:start`
4. Go to the `frontend` folder and run `npm run dev`
5. You should then be able to see the app at your http://localhost:5173

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue in this repository or contact the maintainer at contact@dcadeau.com.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
