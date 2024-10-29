// import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput({ type, register, name, error, placeholder }) {
  return (
    <div className="mb-4">
      <input
        type={type}
        {...register(name)}
        placeholder={error?.message || placeholder}
        className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
  placeholder: PropTypes.string
};

FormInput.defaultProps = {
  error: null,
  placeholder: ''
};
