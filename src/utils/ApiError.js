// This class defines a custom error type named ApiError for handling API errors. 
// It extends the built-in Error class and allows for additional properties such as 
// statusCode, errors, and success to provide more detailed error information.

class ApiError extends Error {
    constructor(
        statusCode,                                     // HTTP status code for the error
        message = "Something Went Wrong",               // Default error message
        errors = [],                                    // Additional errors related to the API error
        stack = ""                                      // Stack trace for the error
    ) {
        super(message);                                 // Call the constructor of the Error class with the message
        this.statusCode = statusCode;                   // Set the status code for the error
        this.data = null;                               // Initialize data property to null
        this.message = message;                         // Set the error message
        this.success = false;                           // Set success to false indicating the operation failed
        this.errors = errors;                           // Set additional errors

        if (stack) {                                    // If a stack trace is provided
            this.stack = stack;                         // Set the provided stack trace
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture the stack trace for the error
        }
    }
}

export { ApiError };                                    // Export the ApiError class for use in other parts of the application
