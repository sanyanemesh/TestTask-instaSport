import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="start">
      <Link className="start__link"
        to={{
          pathname: "/clubs",
        }}
      >
      Выбрать клуб
    </Link>
    </div>
  );
}

export default Start;