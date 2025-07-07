# REST-v0

A beginner-friendly RESTful API built with Node.js and Express, inspired by [Fireship's REST API tutorial](https://www.youtube.com/watch?v=-MTSQjw5DrM).
This project demonstrates the core principles of a RESTful API using basic GET and POST requests.

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed
* [Insomnia](https://insomnia.rest/) – an API client to test endpoints easily

### Setup

```bash
git clone https://github.com/Soujanya-Mctrl/REST-v0.git
cd REST-v0
npm install
node index.js
```

---

## 📁 API Endpoints

### GET `/tshirt`

Returns a mock T-shirt object.

**Request:**

```http
GET /tshirt
```

**Response:**

```json
{
  "tshirt": "👕",
  "size": "M",
  "message": "Hello, this is a T-shirt endpoint!"
}
```

---

### POST `/tshirt/:id`

Updates a T-shirt with a logo, based on the ID passed in the URL.

**Request:**

```http
POST /tshirt/123
Content-Type: application/json

{
  "logo": "🔥"
}
```

**Response:**

```json
{
  "message": "T-shirt with ID 123 has been updated with logo: 🔥",
  "tshirt": "👕",
  "size": "M"
}
```

**Errors:**

```json
Status: 418
{
  "error": "Logo is required"
}
```

---

## 🧩 Middleware

To use middleware like `express.json()` in Express, we first need to import the Express module and create an `app` instance from it:

```js
const express = require('express');
const app = express();
const PORT = 8080;
```

This `app` object gives us access to all the core features of Express, including defining routes and applying middleware. Without it, we wouldn't be able to use `app.use()` or any other Express methods.

Middleware in Express.js are functions that execute during the lifecycle of a request to the server. They're used to modify request and response objects, end request-response cycles, or call the next middleware in the stack.

In this project, we use the built-in Express middleware `express.json()` to parse incoming JSON requests automatically before they reach our route handlers:

```js
app.use(express.json());
```

This allows Express to understand and extract JSON data sent in POST requests, such as:

```json
{
  "logo": "🔥"
}
```

---

## 🧪 API Testing with Insomnia

### What is Insomnia?

[Insomnia](https://insomnia.rest/) is a powerful REST client that allows you to test HTTP requests easily. It's especially useful when building APIs as it offers:

* A clean interface for organizing requests into collections
* Support for all HTTP methods (GET, POST, PUT, DELETE, etc.)
* Easy configuration of headers, query params, and request bodies
* Real-time response preview and status codes
* Environment variables for dynamic requests

Using Insomnia helps you quickly verify your backend routes and debug responses without writing frontend code.

You can use [Insomnia](https://insomnia.rest/) to test your API endpoints easily:

1. Launch Insomnia
2. Create a new request collection (e.g. `REST-v0`)
3. Add a `GET` request to:

   ```
   http://localhost:8080/tshirt
   ```
4. Add a `POST` request to:

   ```
   http://localhost:8080/tshirt/123
   ```
5. For `POST`, set method to `POST` and add JSON body:

   ```json
   {
     "logo": "🔥"
   }
   ```
6. Click "Send" to test the response

This helps you test how your Express server responds to both valid and invalid input in real time.

---

## 🎓 What I Learned

* What REST means and how it works
* How to build an Express server
* How routes work with different HTTP methods (GET, POST)
* Parsing JSON request bodies
* What middleware is and how it's used in Express (e.g., `express.json()` for parsing request bodies)
* How I created middleware using:

  ```js
  app.use(express.json());
  ```

  to automatically parse incoming JSON requests before they reach the route handlers
* Using tools like Insomnia to test APIs

---

## 📚 Inspired By

> [Fireship - REST API Tutorial](https://www.youtube.com/watch?v=-MTSQjw5DrM)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
