# My App
REST API built with Express and Sequelize.

List of user routes:

| Route | HTTP | Header(s) | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `/api/users` | GET | `none` | `none` | Get all the users (Admin only) |
| `/api/users/:id` | GET | `none` | `none` | Get a single user (Admin and Authenticated user) |
| `/api/users` | POST | `none` | `name:String` **(Required)**, `password:String` **(Required)** | Create a users (Admin only) |
| `/api/users/:id` | DELETE | `none` | `none` | delete a user (Admin only) |
| `/api/users/:id` | PUT | `none` | `name:String` **(Required)**, `password:String` **(Required)** | Update a user with new info (Admin and Authenticated user) |
| `/api/signup` | POST | `none` | `name:String` **(Required)**, `password:String` **(Required)**, `role:string` | Sign up with new user info |
| `/api/signin` | POST | `none` | `name:String` **(Required)**, `password:String` **(Required)**, `role:string` | Sign in and get access token based on credentials |

# Usage
Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ npm install
$ npm start
$ npm run dev
```

Access the API via `http://localhost:3000/api`.
