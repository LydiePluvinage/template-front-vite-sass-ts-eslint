import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import IProduct from '../interfaces/IProduct';

import GoToTop from '../components/globals/GoToTop';

const Collection = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>();

  useEffect(() => {
    const getAllProducts = async () => {
      // indispensable quand on veut utiliser async/await dans un useEffect
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
    <div className="collection">
      <div className="collection__grid">
        {/* map du tableau de data de allProducts */}
        {allProducts &&
          allProducts.map(
            ({
              id,
              productImage,
              productName,
              productPrice,
              productDesc,
              productStock,
            }) => (
              // condition ternaire pour le choix des backgrounds-colors des cards
              <div
                // className={${color} == "firstCard" ? "firstCard": "secondCard"}
                key={id}>
                <Link to="/selectedProduct">
                  <img
                    id="collectionBags"
                    src={productImage}
                    alt="Sacs de la marque Brille"
                  />
                </Link>
                <div className="paragraph">
                  <p> {productName}</p>
                  <p className="price">{productPrice}</p>
                  <p> {productDesc}</p>
                  <p> {productStock}</p>
                </div>
              </div>
            ),
          )}
      </div>
      <GoToTop />
    </div>
  );
};

export default Collection;