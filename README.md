# Liberté
This is a full-stack e-commerce web application that utilizes [Stripe](https://stripe.com/) to accept payments. In this application, users can add products into their cart, update the number of items in the cart, and then checkout with their billing/shipping information in order to make a payment via Stripe. This app is powered by [React](https://reactjs.org/) for the client-side, and [Strapi](https://strapi.io/) for the server-side.

![screenshot: homepage](/../main/client/src/assets/screenshots-main.png)

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Technologies Used
- [ReactJS](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [Strapi](https://strapi.io/)
- [Formik](https://formik.org/)
- JavaScript
- [Stripe](https://stripe.com/)
- npm packages:
    - [Yup](https://github.com/jquense/yup)
    - [React Router](https://www.npmjs.com/package/react-router-dom)
    - [concurrently](https://www.npmjs.com/package/concurrently)
    - [dotenv](https://github.com/motdotla/dotenv#readme)
    - [React Responsive Carousel](https://github.com/leandrowd/react-responsive-carousel)

## Installation
1. Install [NodeJS](https://nodejs.org/en/) in your operating system
2. Install ***all*** of the dependencies via command-line in terminal by entering `npm install` in the root directory of the application
3. Start the application by running `npm run develop` in the root directory of the app. Then access `http://localhost:1337` to create a [Strapi](https://strapi.io/) account.
4. Create a collection type called `Item`, and another collection called `Order`.
5. Within the collection type `Order`, enter '**userName**' (text) and '**stripeSessionId**' (text) fields.
6. In the collection type `Item`, create the following fields: '**name**' (text), '**shortDescription**' (rich text), '**longDescription**' (rich text),'**price**' (number),'**image**' (media),'**category**' (enumeration).
7. Under the `Content Manager` section, add all desired products to display in the app by clicking on `+ Create new entry`, and then enter all fields. Save, then publish each entry.
8. Sign up for a [Stripe](https://stripe.com/) account to retrieve a `Publishable key` and `Secret key`.
9. Enter your publishable key into **line 12** in `Checkout.jsx`.
10. Add your secret key in the `.env` file as **STRIPE_SECRET_KEY** in the `server` folder.
11. To compile the development build of the website, execute the following command in the root directory:
```
npm run develop
```

## Usage
Enter `npm run develop` at the root directory in terminal. This will start up the React app and initialize the back-end at the same time. The application will open automatically in your browser.

![application demo](/../main/client/src/assets/demo.gif)

## Screenshots
![screenshot: homepage](/../main/client/src/assets/screenshot-main.png)

![screenshot: product detail](/../main/client/src/assets/screenshot-itemdetail.png)

![screenshot: cart](/../main/client/src/assets/screenshot-cart.png)

![screenshot: checkout](/../main/client/src/assets/screenshot-checkout.png)

## Questions
For any questions about this repository, please contact me at [hayashi.demi@gmail.com](mailto:hayashi.demi@gmail.com).

Visit my GitHub to view more of my works at [github.com/demivlkv](https://github.com/demivlkv)!