# Book Store Project

This is a MERN (MongoDB, Express.js, React.js, Node.js) based Book Store application where users can search, download, and purchase books.

## Features

- **Book Search**: Users can search for books by title or category.
- **Category-wise Search**: Users can browse books by selecting categories.
- **Download Books as PDF**: Users can download books in PDF format.
- **Purchase Books**: Users can purchase books using the integrated payment gateway.
- **Admin Panel**: Admin can manage books and users via the admin panel.

## Admin Credentials

- **Email**: `pinsu@gmail.com`
- **Password**: `123456`

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/pinsu6/book-store.git
    cd book-store
    ```

2. Install dependencies:

    ```bash
    npm install
    cd client
    npm install
    ```

3. Set up the environment variables. Create a `.env` file in the root of the project with the following details:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

4. Run the server and client:

    ```bash
    npm run dev
    ```

5. Access the application:

    - Frontend: `http://localhost:3000`
    - Backend API: `http://localhost:5000/api`

## User Functionality

- Users can search for books by title and filter by category.
- Users can download books in PDF format.
- Books can be purchased through a payment gateway.
- Admin can manage users, add new books, and edit existing book information.

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

### License

This project is licensed under the MIT License.
