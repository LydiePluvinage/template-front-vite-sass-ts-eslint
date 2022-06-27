import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>
        <span>Newsletter</span>
      </h2>
      <form>
        <input type="email" placeholder="entrer votre Email" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Newsletter;
