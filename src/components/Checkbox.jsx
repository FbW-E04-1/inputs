import React, { useState } from 'react';

const Checkbox = () => {
  const [harry, setHarry] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        checked={harry}
        onChange={(e) => setHarry(e.target.checked)}
      />
    </div>
  );
};

export default Checkbox;
