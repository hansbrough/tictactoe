import React from 'react';

const Square = ({value, onClick}) => {
  const styles = value ? `squares ${value}` : `squares`;
  return (
    <button className = {styles} onClick={onClick}>{value}</button>
  )
};

export default Square;
