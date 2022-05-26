import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import CurrentUserContext from '../contexts/CurrentUser';
import IAddress from '../interfaces/IAddress';
import Address from './Address';

interface AddressListProps {
  onlyMine?: boolean;
}

const AddressList = ({ onlyMine = false }: AddressListProps) => {
  const [addresses, setAddresses] = useState<IAddress[]>();
  const { id, firstname } = useContext(CurrentUserContext);

  useEffect(() => {
    const getAddresses = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = 'http://localhost:8000/api/';
      if (onlyMine) {
        url += `users/${id}/addresses`;
      } else {
        url += 'addresses';
      }
      const { data } = await axios.get<IAddress[]>(url, {
        withCredentials: true,
      });
      setAddresses(data);
    };

    getAddresses();
  }, [onlyMine]);

  return (
    <div>
      {id != 0 && <h2>Voici les adresses au nom de {firstname}</h2>}
      {addresses && addresses.map((address) => <Address key={address.id} {...address} />)}
    </div>
  );
};

export default AddressList;
