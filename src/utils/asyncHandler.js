// This function defines a higher-order function named asyncHandler to handle asynchronous request handlers in Express.js.
// It wraps the provided request handler function in a promise to catch any errors and pass them to the next middleware.

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); // Pass any caught errors to the next middleware
    };
}

export { asyncHandler }; // Export the asyncHandler function for use in other parts of the application
