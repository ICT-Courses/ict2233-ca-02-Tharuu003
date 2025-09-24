##AF/22/0759
##AR113029

# My Portfolio Website

## Introduction
This portfolio website showcases my skills and projects, reflecting my journey as an undergraduate student pursuing a B.Sc. Hons. in ICT.

## Features and CA2 Criteria
- *User Interface (UI) Design*: The website's design is modern, professional, and responsive, with a consistent theme across all pages. The use of Tailwind CSS ensures a clean and mobile-friendly layout.
- *Client-Side Functionality*: The contact form provides client-side validation to ensure user input is correct before submission. Interactive elements on the home page, such as the falling leaf animation and particle effects, enhance the user experience.
- *Routing*: The application uses React Router to provide seamless navigation between different pages (Home, About, Projects, Contact) without full-page reloads. A dedicated *404 Not Found* page is implemented to handle invalid URLs, demonstrating robust routing.
- *Modularity and Reusability*: The project is structured with reusable components (e.g., Navbar, Footer) and separate pages for each section, making the code clean and easy to maintain.
- *Asynchronous Data Handling*: The Projects page fetches my public repositories from the GitHub API, demonstrating effective use of asynchronous requests to display dynamic data.
- *Theme Management*: A custom React Context API (ThemeProvider) is used to manage the website's dark and light modes, showcasing advanced state management techniques.

## Technologies Used
- *Frontend*: React.js, Vite
- *Styling*: Tailwind CSS, Custom CSS
- *Routing*: React Router
- *State Management*: React Context API
- *APIs*: GitHub API



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
