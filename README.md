# OMDB Movie Search App

A full-stack web application that allows users to search for movies and fetch detailed movie information using the [OMDB API](https://www.omdbapi.com/). This project demonstrates a clean separation between frontend and backend with modern web technologies.

---

## Live Demo

- Frontend: [https://ohlssondevomdb.netlify.app/](https://ohlssondevomdb.netlify.app/)
- Backend API: [https://omdb-lgm1.onrender.com/](https://omdb-lgm1.onrender.com/)

---

## Technologies Used

### Frontend

- **Vue 3**: Core framework for building the SPA.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first styling framework.
- **Pinia**: State management.
- **Vue Router**: Client-side routing.
- **Axios**: HTTP client for API requests.
- **Lucide Vue Next**: Scalable SVG icons.

### Backend

- **Node.js & Express 5**: Server-side API endpoints.
- **Axios**: For fetching data from OMDB API.
- **CORS**: Cross-origin resource sharing.
- **Express Rate Limit**: Throttling requests to protect the API.
- **Node-Cache**: In-memory caching to reduce redundant requests.
- **dotenv**: Environment variable management.
- **Nodemon**: Development auto-reloading.

---

## Features

- Search movies by title with paginated results.
- Fetch detailed movie information by ID or title.
- Cache frequent requests to optimize API usage.
- Responsive UI with modern design and icons.
- Backend API provides structured and rate-limited endpoints.

---

## Folder Structure

```
.
├── backend       # Express API
├── frontend      # Vue 3 SPA
```

---

## Usage

### Frontend

1. Navigate to `frontend` folder.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

### Backend

1. Navigate to `backend` folder.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your OMDB API key:

```
OMDB_API_KEY=your_api_key_here
```

4. Run the server:

```bash
npm run dev
```

5. Access the API endpoints:

- `/api/search?query=<movie>&page=<number>`
- `/api/movies?title=<movie>`
- `/api/movies/:id`

---
