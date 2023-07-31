# Book API 📚

This is a RESTful API built with Express, MongoDB, and Node.js that provides information about a collection of books. The API contains details on 300+ books related to programming and other categories. It offers various endpoints to fetch book details, categories, names, and supports filtering based on categories, ID, author's name, page count, and more.
## Demo 🎉
https://books-api-dhc6.onrender.com/api/v1/books/


## Getting Started ✨

To get started with this API, follow the steps below:

### Prerequisites

- Node.js (at least version 12.x)
- MongoDB database
- express
- body-parser
- mongoose

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sraveshnandan/MY-FIRST-REST-API.git
cd book-api
```

2. Install dependencies:

```bash
npm install
```

3. Configure MongoDB connection:

   Open `db.js` and replace the MongoDB connection URL with your actual database URL, or you can create your own environment variable file to load your credientials from `.env ` file, which is the secure way to manage your credientials.

### Running the API

Run the following command to start the server:

```bash
npm run dev
```

The API will be accessible at `http://localhost:3000`.

## Endpoints

### Get All Books

Retrieve details of all books in the database.

- **Endpoint:** `/api/v1/books/`
- **Method:** GET
- **Response:** JSON object containing an array of book details.

### Get All Categories

Fetch details of all book categories available.

- **Endpoint:** `/api/v1/books/categories`
- **Method:** GET
- **Response:** JSON object containing an array of category details.

### Get All Book Names

Get the names of all the books available in the database.

- **Endpoint:** `/api/v1/name/`
- **Method:** GET
- **Response:** JSON object containing an array of book names.

### Filter Books

Filter the books based on various criteria such as category, ID, author's name, page count, and more.

- **Endpoint:** `/api/v1/books/filter`
- **Method:** GET
- **Query Parameters:**
  - `category`: Filter books by category.
 
  - Add more query parameters as needed based on your API implementation.

## Error Handling

The API handles errors gracefully and returns appropriate status codes and error messages for invalid requests or server errors.

## Example Usage

Here are some example requests to demonstrate how to use the API:

- **Get all books:**

  ```bash
  GET http://localhost:3000/api/v1/books/
  ```
- **Get all books by count**
 ```bash
  GET http://localhost:3000/api/v1/books/?count=your desired number
  ```

- **Get all categories:**

  ```bash
  GET http://localhost:3000/api/v1/books/categories
  ```

- **Get all book names:**

  ```bash
  GET http://localhost:3000/api/v1/name/
  ```

- **Filter books by category:**

  ```bash
  GET http://localhost:3000/api/v1/books/filter?category=programming
  ```

- **Filter books by author's name:**

  ```bash
  GET http://localhost:3000/api/v1/books/filter?author=John%20Doe
  ```

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please create a pull request or open an issue on the repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.

## Acknowledgments

- Special thanks to all contributors and open-source libraries used in this project.

---
😀 Happy coding!
