# React + Vite
[Deploy in] (https://ecomerce-reac-portfolio.netlify.app)
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# E-commerce Platform

Welcome to the **E-commerce Platform** project! This platform allows users to explore featured products, interact with the shopping cart, check out, view reviews, and follow the business on social media. Built using React and styled with Tailwind CSS, this project integrates essential e-commerce functionalities for a smooth user experience.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Technologies](#technologies)
5. [Components](#components)
    - [Header](#header)
    - [Collage](#collage)
    - [Comments](#comments)
    - [Social Media](#social-media)
    - [Footer](#footer)
6. [State Management](#state-management)
7. [Running the Project](#running-the-project)
8. [Future Enhancements](#future-enhancements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

This is a fully functional **e-commerce platform** where users can view featured products, check product reviews, and stay updated via social media links. The platform includes a shopping cart system, a checkout process, and responsive layouts to ensure compatibility across devices.

## Features

- **Featured Products Collage:** Displays randomly selected popular products.
- **Shopping Cart:** Add and remove items to/from the cart.
- **Checkout Process:** Complete purchases through a checkout side menu.
- **Customer Reviews:** Showcases customer feedback and experiences.
- **Social Media Integration:** Links to popular social platforms.
- **Responsive Design:** Optimized for both desktop and mobile views.
- **Dark Mode:** Allows users to switch between light and dark modes (if applicable).

## Installation

To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-platform.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-platform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Technologies

- **React:** Frontend framework
- **Tailwind CSS:** Styling framework
- **JavaScript:** For logic and functionality
- **Context API:** For state management
- **React Router:** For navigation between pages

## Components

### Header

Displays the title and a call-to-action button that links to the homepage.

- **Props:** None
- **Functionality:** 
  - A header section with a gradient background.
  - A "Shop Now" button that redirects users to the homepage.

### Collage

Shows a grid of featured products. The products are selected randomly using the `getRandomNumbers` function.

- **Props:** None
- **Functionality:** 
  - Displays a 4-product collage of featured items.
  - On hover, the images zoom in, and a product name and price appear with a gradient overlay.

### Comments

Displays customer reviews about the platform.

- **Props:** None
- **Functionality:** 
  - Shows customer feedback in grid format.
  - Each review is enclosed in a card-like UI with rounded corners and shadows.

### Social Media

Displays social media links where users can follow the business.

- **Props:** None
- **Functionality:** 
  - Provides interactive social media links styled with brand colors.
  - Links: Facebook, Twitter, Instagram, and LinkedIn.
  - Includes hover effects on icons for better user interaction.

### Footer

The footer contains copyright information and links to legal pages.

- **Props:** None
- **Functionality:** 
  - Displays a basic footer with privacy policy and terms of service links.

## State Management

The **ShoppingCartContext** provides global state management for handling the shopping cart and checkout process. Key actions managed by the context:

- `context.setIsCheckoutSideMenuOpen()`: Controls the visibility of the checkout menu.
- `context.items`: Manages the items in the shopping cart.
- `context.addItemToCart()`: Adds products to the cart.
- `context.removeItemFromCart()`: Removes products from the cart.

## Running the Project

After installation, use the following command to start the development server:

```bash
npm start
```

This will open the project in your default web browser at `http://localhost:3000`.

To build the project for production, use:

```bash
npm run build
```

This will generate optimized static files ready for deployment.

## Future Enhancements

Some ideas for future improvements:

- **Product Search:** Add a search bar for easier product discovery.
- **Pagination:** Implement pagination for product listings.
- **User Authentication:** Enable user sign-in and sign-up for a more personalized experience.
- **Wishlist:** Allow users to save items for later in a wishlist.

## Contributing

We welcome contributions! Feel free to fork this repository, make changes, and submit a pull request. You can also open an issue for any suggestions or bugs.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
