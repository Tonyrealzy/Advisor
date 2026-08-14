
# Advisor Next

Advisor Next is a modern web application built with [Next.js](https://nextjs.org), serving as the frontend for the Advisor AI platform. It provides users with personalized investment recommendations and access to their AI-generated investment responses, leveraging a robust backend API.

## Features

- User authentication and secure access
- Request AI-powered investment recommendations
- View and manage stored AI responses
- Responsive, user-friendly interface
- Integration with Advisor AI backend API

## Project Structure

- **app/**: Main Next.js app directory (pages, layouts, API routes)
- **src/**: Source code for config, services, models, utilities, etc.
- **public/**: Static assets
- **prisma/**: Database schema and migrations

## Backend API

The Advisor Next frontend communicates with a dedicated backend service that exposes a documented REST API.

- **Backend Swagger Docs:** [https://advisor-blush.vercel.app/swagger](https://advisor-blush.vercel.app/swagger)
- **Backend Base URL:** [https://advisor-blush.vercel.app/api](https://advisor-blush.vercel.app/api)

## Live Demo

The latest version of Advisor Next is deployed and accessible at:

- **Frontend:** [https://advisor-blush.vercel.app](https://advisor-blush.vercel.app)

## Getting Started (Development)

To run the project locally:

```bash
pnpm install
pnpm dev
# or use npm/yarn/bun as preferred
```

Open [http://localhost:3002](http://localhost:3002) in your browser to view the app.

The development server binds to `0.0.0.0`, so other frontend projects on your machine/network can reach the API on `http://<host-ip>:3002/api`.

## Environment Variables

Ensure you have the required environment variables set up for API endpoints and authentication. See `.env.example` or project documentation for details.

For external frontend access to this backend API, set:

```bash
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3002,http://localhost:5173
```

The API CORS middleware allows only origins in this list for `/api/*` routes.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
