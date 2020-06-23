import React from 'react';
// import cn from 'classnames';

type Props = {
  filters: string[];
  callback: (value: string) => void;
  type: string;
}

const FilterButtons: React.FC<Props> = ({ filters, callback, type }) => {
  return (
    <div className={type}>
      {
      filters.map(item => (
        <button
          className="button"
          type="button"
          key={item}
          onClick={() => callback(item)}
        >
          {item}
        </button>
        ))
      }
    </div>
  )
}

export default FilterButtons;