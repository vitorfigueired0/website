// Custom error classes
export class APIError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

export class ValidationError extends Error {
  constructor(message, errors = {}) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

// Error handling utilities
export const handleAPIError = (error) => {
  if (error instanceof APIError) {
    // Handle specific HTTP status codes
    switch (error.status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'You need to be logged in to perform this action.';
      case 403:
        return 'You don\'t have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 429:
        return 'Too many requests. Please try again later.';
      case 500:
        return 'An internal server error occurred. Please try again later.';
      default:
        return error.message || 'An unexpected error occurred.';
    }
  }
  
  if (error instanceof ValidationError) {
    return Object.values(error.errors).join(', ');
  }

  // Handle network errors
  if (!navigator.onLine) {
    return 'You are currently offline. Please check your internet connection.';
  }

  // Default error message
  return 'An unexpected error occurred. Please try again.';
};

// Function to format error messages for logging
export const formatErrorForLogging = (error, context = {}) => {
  return {
    name: error.name,
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context,
    ...(error instanceof APIError && {
      status: error.status,
      data: error.data,
    }),
    ...(error instanceof ValidationError && {
      validationErrors: error.errors,
    }),
  };
};

// Function to handle errors in async functions
export const withErrorHandling = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      const formattedError = formatErrorForLogging(error, { args });
      console.error('Error occurred:', formattedError);
      
      // You can add error reporting service here
      // await reportError(formattedError);
      
      throw error;
    }
  };
}; 