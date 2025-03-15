import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error, className = '', onRetry }) => {
  if (!error) return null;

  return (
    <div className={`bg-red-50 border border-red-200 rounded-md p-4 ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">
            {typeof error === 'string' ? error : error.message}
          </p>
        </div>
      </div>
      {onRetry && (
        <div className="mt-3">
          <button
            onClick={onRetry}
            className="text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  ]),
  className: PropTypes.string,
  onRetry: PropTypes.func,
};

export default ErrorMessage; 