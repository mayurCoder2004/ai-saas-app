
# AI SaaS App

AI SaaS App is a full-stack, modern SaaS platform that leverages artificial intelligence to provide a suite of productivity tools for creators, professionals, and businesses. The app features image generation, background/object removal, resume review, blog title creation, article writing, and more—all accessible via a clean, responsive dashboard.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [Contributing](#contributing)
- [Credits & Acknowledgments](#credits--acknowledgments)
- [License](#license)

---

## Project Overview

AI SaaS App aims to democratize access to powerful AI tools for content creation, image editing, and productivity. Users can generate images, write articles, create blog titles, review resumes, and more—all from a single dashboard. The platform is built for scalability, security, and ease of use, with cloud storage and authentication.

---

## Features

- **AI Image Generation:** Create unique images using generative AI models.
- **Background/Object Removal:** Upload images and remove backgrounds or unwanted objects.
- **Resume Review:** Get AI-powered feedback and suggestions for your resume.
- **Blog Title Generator:** Generate catchy blog titles based on your topic.
- **Article Writer:** Compose articles with AI assistance.
- **User Dashboard:** Track your creations, manage your account, and access community features.
- **Authentication:** Secure login and registration using JWT.
- **Cloud Storage:** Store and manage images with Cloudinary.
- **Community:** Share creations and interact with other users.
- **Responsive UI:** Built with Tailwind CSS for seamless experience on all devices.

---


## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** NeonDB (PostgreSQL)
- **Cloud Storage:** Cloudinary
- **Authentication:** JWT
- **Deployment:** Vercel

---

## Getting Started


### Prerequisites
- Node.js & npm
- NeonDB (PostgreSQL) account & connection string
- Cloudinary account (for image storage)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mayurCoder2004/ai-saas-app.git
   cd ai-saas-app
   ```
2. **Install dependencies:**
   - Frontend:
     ```sh
     cd client
     npm install
     ```
   - Backend:
     ```sh
     cd ../server
     npm install
     ```
3. **Configure environment variables:**
   - Create `.env` files in both `client` and `server` folders. See [Configuration](#configuration) for details.

### Running the App
- **Frontend:**
  ```sh
  cd client
  npm run dev
  ```
- **Backend:**
  ```sh
  cd server
  npm start
  ```

---

## Configuration

Create `.env` files in both `client` and `server` directories. Example variables:


**server/.env**
```
DATABASE_URL=your_neondb_postgresql_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**client/.env**
```
VITE_BASE_URL=http://localhost:5000
```

---

## Usage

1. Register or log in to access the dashboard.
2. Use the sidebar to navigate between tools:
   - Generate images
   - Write articles
   - Create blog titles
   - Review resumes
   - Remove backgrounds/objects from images
3. View, download, or share your creations.

### Screenshots
Add screenshots of the dashboard, AI tools, and results here.

---

## API Endpoints

### Authentication
- `POST /api/user/register` — Register a new user
- `POST /api/user/login` — Log in

### AI Tools
- `POST /api/ai/generate-image` — Generate an image
- `POST /api/ai/remove-background` — Remove image background
- `POST /api/ai/remove-object` — Remove object from image
- `POST /api/ai/review-resume` — Review resume
- `POST /api/ai/blog-titles` — Generate blog titles
- `POST /api/ai/write-article` — Write an article

### Example Request
```sh
curl -X POST http://localhost:5000/api/ai/generate-image \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "A futuristic cityscape at sunset"}'
```

---

## Folder Structure

```
ai-saas-app/
├── client/        # Frontend (React)
│   ├── src/
│   │   ├── assets/         # Images, icons, etc.
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components (Dashboard, Tools, etc.)
│   │   └── ...
│   ├── public/             # Static files
│   └── ...
├── server/        # Backend (Node.js/Express)
│   ├── controllers/        # Route controllers
│   ├── routes/             # API route definitions
│   ├── configs/            # Config files (DB, Cloudinary, etc.)
│   ├── middlewares/        # Express middlewares
│   └── ...
```

---

## Deployment

### Vercel
This app is ready to deploy on Vercel. See `vercel.json` in both `client` and `server` for configuration.

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Set environment variables in Vercel dashboard.
4. Deploy!

---

## Troubleshooting & FAQ


**Q: The app won't start!**
A: Check that all environment variables are set and NeonDB (PostgreSQL) is accessible.

**Q: Images aren't uploading.**
A: Verify your Cloudinary credentials and API keys.

**Q: API requests fail with 401.**
A: Make sure you are sending the JWT token in the `Authorization` header.

**Q: How do I switch databases?**
A: Update the NeonDB connection string in `server/.env`.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Credits & Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Vercel](https://vercel.com/)

---

## License

This project is licensed under the MIT License.
