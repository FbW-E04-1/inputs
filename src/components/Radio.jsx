import React, { useState } from 'react';

const Radio = () => {
  const [radio, setRadio] = useState('Berlin');
  const [radio2, setRadio2] = useState('Paris');

  return (
    <div>
      <label>Berlin</label>
      <input
        // name='first'
        type='radio'
        checked={radio === 'Berlin'}
        value='Berlin'
        onChange={(e) => setRadio(e.target.value)}
      />
      <label>London</label>
      <input
        //name='first'
        type='radio'
        checked={radio === 'London'}
        value='London'
        onChange={(e) => setRadio(e.target.value)}
      />
      <label>Madrid</label>
      <input
        //name='first'
        type='radio'
        checked={radio === 'Madrid'}
        value='Madrid'
        onChange={(e) => setRadio(e.target.value)}
      />

      <label>Paris</label>
      <input
        //name='second'
        type='radio'
        checked={radio2 === 'Paris'}
        value='Paris'
        onChange={(e) => setRadio2(e.target.value)}
      />
      <label>Dubai</label>
      <input
        //name='second'
        type='radio'
        checked={radio2 === 'Dubai'}
        value='Dubai'
        onChange={(e) => setRadio2(e.target.value)}
      />
      <label>Malta</label>
      <input
        //name='second'
        type='radio'
        checked={radio2 === 'Malta'}
        value='Malta'
        onChange={(e) => setRadio2(e.target.value)}
      />
    </div>
  );
};

export default Radio;
