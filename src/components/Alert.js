/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/Alert.css';

function Alert(props) {
  return (
    props.alert && (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show Alert-Cont`}
      role="alert"
    >
      <strong>{props.alert.title}</strong>
      {': '}
      {props.alert.message}
    </div>
    )
  );
}

export default Alert;
