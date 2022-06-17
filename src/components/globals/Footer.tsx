import React from 'react';

import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <footer>
        <div className="container__footer">
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/">Nous contacter</a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/">Mentions légales</a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/">Conditions générales de ventes </a>
            </li>
          </ul>
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/">Retours et échanges</a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/">Informations de livraisons</a>
            </li>
          </ul>
          <ul>
            <li>
              <a target="_blank" href="https://www.google.fr/">Twitter</a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/">Instagram</a>
            </li>
            <li>
              <a target="_blank" href="https://www.google.fr/">Facebook</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
