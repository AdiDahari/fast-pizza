import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  return to === '-1' ? (
    <button onClick={() => navigate(-1)} className={className}>
      {children}
    </button>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
