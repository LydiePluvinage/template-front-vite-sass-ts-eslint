import React from 'react';

import IAddress from '../interfaces/IAddress';

const Address = ({ address1, address2, postalCode, city }: IAddress) => {
  return (
    <ul className="address">
      <li>{address1}</li>
      <li>{address2}</li>
      <li>
        {postalCode} {city}
      </li>
    </ul>
  );
};

export default Address;
