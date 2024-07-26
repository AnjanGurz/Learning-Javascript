// Import Axios library if using node env but if using browser no need 
const axios = require('axios'); // Use <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> for browser environments

/**
 * 1. Basic GET Request Example
 * Makes a GET request to the specified URL and logs the response data.
 */
const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    // Make the GET request
    let res = await axios.get(url);
    console.log(res.data); // Data is automatically parsed as JSON
  } catch (err) {
    console.error(err); // Log any errors
  }
}

getJokes();

/**
 * 2. Handling Response Data
 * Axios automatically parses the response data into JSON if the `Content-Type` is `application/json`.
 * Access the data via `res.data`.
 */

/**
 * 3. Setting Request Headers
 * By default, Axios includes an `Accept: application/json` header.
 * Custom headers can be added as needed.
 */
async function fetchDataWithHeaders() {
  try {
    let res = await axios.get(url, {
      headers: {
        'Accept': 'application/json' // Explicitly request JSON response
      }
    });
    console.log(res.data); // Should be JSON data
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithHeaders();

/**
 * 4. Handling Errors
 * Use `try-catch` blocks to handle errors gracefully.
 */
async function fetchDataWithErrorHandling() {
  try {
    let res = await axios.get(url);
    console.log(res.data); // Log the response data
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithErrorHandling();

/**
 * 5. Including Authentication
 * Example of including an authentication token in the request headers.
 */
const token = "your-auth-token"; // Replace with actual token

async function fetchDataWithAuth() {
  try {
    let res = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include authentication token
        'Accept': 'application/json'
      }
    });
    console.log(res.data); // Should be JSON data
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithAuth();

/**
 * 6. Using Query Parameters
 * Include query parameters in the request.
 */
const params = { key: 'value' };

async function fetchDataWithParams() {
  try {
    let res = await axios.get(url, { params });
    console.log(res.data); // Data including query parameters
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithParams();

/**
 * 7. Handling Different Response Formats
 * Some APIs support multiple formats; specify the desired format using headers or query parameters.
 */
async function fetchDataWithFormat() {
  try {
    let res = await axios.get(url, {
      headers: {
        'Accept': 'application/json' // Ensure JSON response
      }
    });
    console.log(res.data); // Should be JSON data
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithFormat();

/**
 * 8. API Versioning
 * Use versioned endpoints if the API supports different versions.
 */
const versionedUrl = "https://example-api.com/v1/data"; // Version 1 of the API

async function fetchDataWithVersion() {
  try {
    let res = await axios.get(versionedUrl);
    console.log(res.data); // Data from version 1 of the API
  } catch (err) {
    console.error(err); // Log any errors
  }
}

fetchDataWithVersion();

/**
 * 9. Common Use Cases
 * - Fetching data from APIs.
 * - Sending data to APIs.
 * - Handling authentication and authorization.
 * - Setting custom headers and parameters.
 * - Debugging and error handling.
 */

