import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Alert.css';

const Alert = (
  { alert },
) => (
  alert && (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show Alert-Cont`}
      role="alert"
    >
      <strong>{alert.title}</strong>
      {': '}
      {alert.message}
    </div>
  )
);

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default Alert;
