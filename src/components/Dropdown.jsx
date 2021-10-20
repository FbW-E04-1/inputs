import React, { useState } from 'react';

const Dropdown = () => {
  const [select, setSelect] = useState('Berlin');

  // const list = ['Berlin', 'London', 'Madrid'];

  // const option = list.map((item) => <option value={item}>{item}</option>);

  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value='Berlin'>Berlin</option>
        <option value='London'>London</option>
        <option value='Madrid'>Madrid</option>
        {/* {option} */}
      </select>
    </div>
  );
};

export default Dropdown;
