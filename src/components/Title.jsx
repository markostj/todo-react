import React from 'react';

export const Title = ({ title, updateShared, shared }) => (
  <>
    <p>{title}</p>
    <button value={title} onClick={updateShared}>
      klikni me
    </button>
    <p>{shared}</p>
  </>
);
