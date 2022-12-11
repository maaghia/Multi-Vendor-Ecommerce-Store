# Multi-Vendor-Ecommerce-Store
CLA graduation project. A Multi Vendor Ecommerce Marketplace, which gives you the ability to post about any kind of (used or new) product you want to sell and the other users have the access to your profile (see your personal information and contact you).

Maria
Project name: bazaar
The idea is to make a multi vendor ecommerce marketplace, which gives you the ability to post about any kind of (used or new) product you want to sell and the other users have the access to your profile (see your personal information and contact you).
References: 
https://www.ouedkniss.com/ 
https://www.vinted.fr/
https://www.dabchy.com/

Stack
ReactJS - ContextAPI - TailwindCSS - ExpressJS - MongoDB
Template
https://www.figma.com/community/file/1118064586686184523
https://screenlane.com/post/ios/gumtree/

Features
The user interface must have dark/light mode
All actions and states should be implemented using Redux
1- Users
Authentication: User can signup and sign in using email and password with email verification  [DONE], and using Google Account [IN PROGRESS]
Profile settings: User can update his full name, phone number, and address [DONE]. All these information are mandatory to start posting products [DONE]
User profile page: This page should be accessible by everyone and has information about the user and all his products
Route to fetch all products created by a specific user getProductsByUser()  [DONE]

2- Products
The product should have a title, description, category, images, state (score out of 10, while 10 is brand new and 1 is really old) [DONE]
User can create, delete and update a product  [DONE]
User can fetch all products and filter by category [DONE]
User can fetch a specific product and get all its details - /api/products/:id  [DONE] 






Why the milestones? 
Milestones help in determining and documenting project goals and helps you control the scope of the project. Other than that, milestone submissions help teachers correctly track your progress, and provide meaningful feedback.

:::Milestones:::
Frontend: React Setup + important pages – 
Setup React and Install TailwindCSS if suitable
You can start with simple HTML/CSS/TailwindCSS for your views before creating your components (with no global state, routing or asynchronous logic...)
Use provided Figma community designs for your UI (Feel free to keep it customized)
You can also use any React UI library like React suite: https://rsuitejs.com/
Keep it modular and easy to maintain
# Backend – 
Setup Express [DONE] 
Create main API routes [DONE] 
Setup Postman for consuming your API [DONE] 
Add MongoDB with Mongoose and define all your models [DONE] 
CRUD for all models using Postman [DONE] 
Implement Authentication
Use Postman for testing the complete flow of the backend of your project [DONE] 
# Frontend – 
CRUD for all models
Redux Toolkit for State management
Valid Frontend Auth implementation
Complete routing solution with React router
Finalized project and Demo – 
Post Feedback changes
Project Demo (25 min max) -- 