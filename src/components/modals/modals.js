import React from 'react'

const Modals = props => {
  const { modal } = props;

  return (
    <div className="modals">
      <h1>{modal}</h1>
    </div>
  );
};

export default Modals;