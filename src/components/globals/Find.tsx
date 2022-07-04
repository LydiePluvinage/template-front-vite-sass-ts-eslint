import Button from '@mui/material/Button';
import axios from 'axios';
import SearchBar from 'material-ui-search-bar';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';

import IProduct from '../../interfaces/IProduct';
import GoToTop from '../globals/GoToTop';

const Find = () => {
  // ---- States -----
  const [allProducts, setAllProducts] = useState<IProduct[]>();
  const [userChoice, setUserChoice] = useState('');

  // ---- Func -----

  const findProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChoice(e.target.value);
  };

  // >> Axios to get all Products
  useEffect(() => {
    const getAllProducts = async () => {
      let url: string = 'http://localhost:8000/api/products';

      const { data } = await axios.get<IProduct[]>(url, {
        withCredentials: true,
      });
      setAllProducts(data);
      console.log(data);
    };

    getAllProducts();
  }, []);
  return (
    <div>
      {/* --- SEARCH BAR --- */}
      <div className="searchContainer">
        <div className="searchContainer__inputContainer">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <SearchBar
              className="searchContainer__inputContainer__input"
              value={userChoice}
              placeholder="Recherche"
              onChange={findProduct}
            />
          </Animated>
        </div>

        {/* --- PRODUCT ITEMS MAPPING --- */}
        <div className="searchContainer__displayAll">
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Button variant="text" className="searchContainer__displayAll__button">
              TOUTE LA COLLECTION
            </Button>
          </Animated>
        </div>
        <div className="searchContainer__collectionWrapper">
          {allProducts &&
            allProducts.map(({ id, productImage, productName }) => (
              <Animated
                key={id}
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}>
                <div className="searchContainer__collectionWrapper__container">
                  <img
                    id="collectionBags"
                    src={productImage}
                    alt="Sacs de la marque Brille"
                    className="searchContainer__collectionWrapper__container__image"
                  />
                  <p className="searchContainer__collectionWrapper__container__text">
                    {' '}
                    {productName}
                  </p>
                </div>
              </Animated>
            ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Find;
