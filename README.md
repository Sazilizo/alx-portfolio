Swipe a'Loot

Is an ecommerce front-end website build with React. It focusses on selling affordable clothing for men and women and also electronics.

Users can register, log in, and have their cart items persisted using localStorage.


It uses Contentful as its Content manager
Swipe is used for payments and keeping track of users
 
Table of Contents
Features
Installation
Usage
Folder Structure
Contributing
License
Features
User registration and login functionality
Persistent cart using localStorage
Product listing and details
Add and remove items from the cart
Responsive design
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Sazilizo/alx-portfolio.git
cd swipe-a-loot
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
The application will be running at http://localhost:3000.

Usage
User Registration and Login
Navigate to the registration page to create a new account.
Use the login page to access your account.
Once logged in, your cart items will be saved and retrieved from localStorage.
Adding Items to the Cart
Browse the available products.
Click on the "Add to Cart" button to add an item to your cart.
View your cart to see the items you have added.
Adjust the quantity or remove items from the cart as needed.
Viewing the Cart
Access the cart page to see the items you have added.
The cart items and their quantities will be saved in localStorage and persisted across sessions.
Folder Structure
css
Copy code
swipe-a-loot/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CartItems.js
│   │   ├── Layout/
│   │   │   ├── Header.js
│   │   │   └── ...
│   │   ├── Products
│   │   └── ...
│   ├── context
│   │   ├── ShopContext.js
│   ├── 
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear and concise messages.
Push your changes to your forked repository.
Create a pull request to the main repository.
License
This project is licensed under the MIT License. See the LICENSE file for details.

