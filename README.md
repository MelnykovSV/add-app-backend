## Live Version

Explore the live version of the Listings App backend:
[Listings App backend](https://add-app-backend-w6gc.onrender.com/)

## Technologies Used

- NodeJS
- ExpressJS
- TypeScript
- MongoDB
- Cloudinary

## Features

- **GET Endpoint for Retrieving Listings (/listings)**: This endpoint allows users to retrieve listings based on the geographical bounds provided.

  
-minLat (required): The minimum latitude coordinate of the bounding box.

-maxLat (required): The maximum latitude coordinate of the bounding box.

-minLon (required): The minimum longitude coordinate of the bounding box.

-maxLon (required): The maximum longitude coordinate of the bounding box.

-searchQuery (optional): Allows to filter listings based on substrings present in the name and description fields.

  
  The backend fetches listings within the provided bounds and optionally filtered by the search query, returning
  the relevant data to the client.

- **POST Endpoint for Creating Listings(/listings)**: This endpoint enables users to create new listings by submitting a POST request. Users must provide a form data payload containing the necessary information for the new listing:


-name (required): The name/title of the listing.

-description (required): A description of the listing.

-price (required): The rental price of the listing.

-address (required): The address of the listing.

-Latitude (lat, required): The latitude coordinate of the listing's location.

-Longitude (lon, required): The longitude coordinate of the listing's location.

-image (required): An image file (in JPEG or PNG format) representing the listing.


Upon receiving the request, the backend validates the provided data to ensure all required fields are present and properly formatted. If the validation is successful, the backend processes the image file, saves it to storage, and creates a new listing record in the database with the provided information. The backend then responds with a success message or the newly created listing object.


## Getting Started

To get started with the Medicine Delivery App backend, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/MelnykovSV/listings-app-backend.git
```

2. Install dependencies using npm:

```bash
npm install

```

3. Start the development server:

```bash
npm run dev

```
4. Include the .env file in the root directory with the following contents:

DB_HOST = ****************

CLOUDINARY_NAME = ****************

CLOUDINARY_KEY = ****************

CLOUDINARY_SECRET = ****************


5. Access the application at http://localhost:5000.
