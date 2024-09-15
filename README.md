# 🍰 Cake Store

Cake Store is a full-stack web application built to sell various cakes from around the world. It includes user authentication (registration and login), product display, cart functionality, and shipping address collection.

## 🎯 Project Aim

The aim of this project is to build a website where users can browse cakes, add items to their cart, and complete the purchase with proper registration and login functionalities.

## 🛠 Tech Stack

- **Frontend**: AngularJS, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: In-memory (can be extended to use MongoDB, etc.)

## 🚀 Features

- User Registration and Login
- Display a variety of cakes
- Add items to the cart
- Shipping address form
- Responsive design

## 📁 Folder Structure

```
Cake-Store/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── product.js
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── components/
│   │   ├── home.component.html
│   │   └── home.component.css
│   └── package.json
│
└── README.md
```

## 🖥️ Installation & Setup

### Prerequisites

- **Node.js**: Ensure that Node.js and npm are installed on your system.
- **AngularJS**: The frontend is built with AngularJS, so you can use a CDN or install it via npm.

### Backend Setup (Node.js)

1. Navigate to the `backend` directory:

   ```
   cd Cake-Store/backend
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node app.js
   ```

or if you have ```nodemon``` installed:

```
npx nodemon app.js
```

The backend will be running at ```http://localhost:5000```.

## Frontend Setup (AngularJS)

1. Navigate to the ```frontend``` directory:

   ```
   npx nodemon app.js
   ```

2. If you are using npm for AngularJS, install the dependencies:

    ```
    npm install
    ```

3. Serve the frontend using a tool like ```live-server```:

    ```
    live-server
    ```

