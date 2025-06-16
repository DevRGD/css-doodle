# Interactive Backgrounds with Next.js, GSAP, and CSS-Doodle

This project is a demonstration of how to create a dynamic, scroll-triggered, full-screen background that changes as the user scrolls through different content sections. It combines the generative art power of `css-doodle` with the professional animation capabilities of GSAP's ScrollTrigger within a modern Next.js application.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**[Link to Live Demo](https://css-doodle.vercel.app/)**

---

![Project Screenshot](https://css-doodle.vercel.app/og-image.png)

## Features

- **Fixed Generative Background:** A `css-doodle` component is fixed to the viewport, providing a constant, animated background.
- **Scroll-Triggered Transitions:** Uses GSAP's `ScrollTrigger` to detect the currently visible content section.
- **Smooth Fading Effect:** The background doodle smoothly fades into the new pattern when the active section changes, powered by GSAP tweens.
- **Dynamic Content:** The page can have any number of scrolling sections, each capable of triggering a unique background.
- **Component-Based Architecture:** Built with reusable components for the `<Doodle>` element and a clean data structure for managing patterns.
- **Modern React & Next.js Practices:**
  - Uses Next.js 13+ App Router.
  - Implements `'use client'` for client-side interactivity.
  - Uses the official `@gsap/react` hook (`useGSAP`) for clean, safe animation code.
  - Separates data (doodle patterns) from the view layer for better maintainability.

## How It Works

The core of the project relies on the synergy between React's state management and GSAP's powerful `ScrollTrigger` plugin.

1.  **State Management:** A React state variable (`useState`) in the main `Page` component holds the currently active `css-doodle` pattern.
2.  **Scroll Detection:** The `useGSAP` hook sets up a `ScrollTrigger` for each content section. When a section scrolls into the center of the viewport, its `onEnter` callback fires.
3.  **Dynamic Updates:** This callback updates the state with the new doodle pattern associated with that section.
4.  **Reactive Rendering:** React's `key` prop on the background `<Doodle>` component forces it to re-mount completely when the state changes, ensuring the new pattern is rendered.
5.  **Smooth Transitions:** A second `useGSAP` hook watches for changes to the active doodle and runs a simple `gsap.fromTo()` animation to create a smooth cross-fade effect.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Generative Art:** [css-doodle](https://css-doodle.com/)
- **Animation:** [GSAP (GreenSock Animation Platform)](https://gsap.com/) with ScrollTrigger

## Project Structure

The project follows a standard Next.js App Router structure with some key folders:

```
css-doodle/
├── app/                  # Main application folder
│   ├── globals.css       # Global styles
│   ├── layout.jsx        # Main layout component
│   └── page.jsx          # The main page component
├── libs/                 # Shared data and constants
│   ├── doodles.js        # Contains all css-doodle patterns
│   └── sections.js       # Defines the data for each scrolling section
├── components/           # Reusable React components
│   ├── Doodle.jsx        # The css-doodle Component
│   └── Section.jsx       # Component for each section with doodle
├── public/               # Static assets (favicons, etc.)
└── ...
```

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**

    ```bash
    git clone https://github.com/DevRGD/css-doodle
    cd css-doodle
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
