import React from 'react';

const Loader = () => {
  return (
    <div className="bg-slate-200/2 absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="loader" />
    </div>
  );
};

export default Loader;
