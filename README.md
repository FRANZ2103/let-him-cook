# Let Him Cook

AI-powered recipe generator built with React, Tailwind CSS, and the Hugging Face Inference API.

## Live Demo

https://your-vercel-url.vercel.app

## Overview

Let Him Cook is a web application that generates recipes from ingredients provided by the user. Simply enter the ingredients available in your kitchen, and the AI will generate a recipe based on those inputs.

This project was built to explore React development, API integration, state management, and AI-powered applications.

## Features

- Generate recipes using AI
- Add and manage ingredients dynamically
- Responsive user interface
- Dark mode support
- Fast and intuitive user experience
- Secure API key management through environment variables

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

### AI Integration

- Hugging Face Inference API
- Large Language Models (LLMs)

### Deployment

- Vercel

## Screenshots

Add screenshots of the application here.

## Installation

### Clone the Repository

```bash
git clone https://github.com/FRANZ2103/let-him-cook.git
cd let-him-cook
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_HF_API_KEY=your_huggingface_api_key
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## How It Works

1. Enter ingredients you currently have available.
2. Add them to the ingredient list.
3. Click **Generate Recipe**.
4. The application sends the ingredients to a language model through the Hugging Face API.
5. The AI generates a recipe tailored to the provided ingredients.
6. The generated recipe is displayed within the application.

## Project Structure

```text
src/
├── components/
├── App.jsx
├── index.css
└── main.jsx
```

## Environment Variables

| Variable        | Description          |
| --------------- | -------------------- |
| VITE_HF_API_KEY | Hugging Face API Key |

## Future Improvements

- Recipe history
- Save favorite recipes
- Nutritional information
- Cuisine selection
- Recipe image generation
- User authentication
- Ingredient quantity support

## Learning Outcomes

This project helped strengthen skills in:

- React fundamentals
- Component-based architecture
- State management with React Hooks
- API integration
- Environment variable management
- Responsive web design
- Tailwind CSS
- AI-powered application development
- Deployment with Vercel

## Author

Ferdinand Francis Sundiam

Bachelor of Science in Computer Engineering (Cum Laude)

LinkedIn: linkedin.com/in/franz-sundiam/

GitHub: https://github.com/FRANZ2103
