import React from 'react';

const style = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const withLoading = (Component) => (props) => {
  const { isLoading } = props;
  return isLoading
    ? <div style={style}>Loading...</div>
    : <Component {...props} />
}