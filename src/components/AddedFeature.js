import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button2'
        onClick={() => props.removeFeature(props.feature.id)}>
        Remove Feature
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;