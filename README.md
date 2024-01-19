# URL Shortener Microservice
Welcome to the URL Shortener Microservice! This Node.js-powered service allows you to easily shorten long URLs, making them more convenient to share and manage. Here's how it works:

Shorten a URL (POST):

To create a short URL, simply make a POST request to /api/shorturl with the original URL you want to shorten. The service will respond with a JSON object containing both the original and short URLs. For example:
json
Copy code
{ "original_url": "https://freeCodeCamp.org", "short_url": 1 }
Access Shortened URL (GET):

Once you've obtained a short URL, visiting /api/shorturl/<short_url> will automatically redirect you to the original URL associated with that short link. Experience seamless navigation with the convenience of shortened URLs.
Error Handling for Invalid URLs:

If you attempt to shorten an invalid URL that does not adhere to the valid format (e.g., http://www.example.com), the service will respond with a clear error message in JSON format:
json
Copy code
{ "error": "invalid url" }
This ensures that only valid URLs are processed, maintaining the integrity of the URL shortening service.
Enjoy the simplicity and efficiency of this URL Shortener Microservice, designed to enhance your link-sharing experience!

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.
