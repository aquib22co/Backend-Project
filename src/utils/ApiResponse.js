// This class defines a custom response type named ApiResponse for handling API responses. 
// It encapsulates the status code, data, message, and success status of an API response.

class ApiResponse {
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode; // HTTP status code for the response
        this.data = data; // The data returned by the API
        this.message = message; // Message about the response, default is "success"
        this.success = statusCode < 400; // Success is true if status code is less than 400, indicating no error
    }
}

export { ApiResponse }; // Export the ApiResponse class for use in other parts of the application
