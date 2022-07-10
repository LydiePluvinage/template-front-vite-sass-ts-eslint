import axios from 'axios';
import React, { useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUser';
import IUser from '../interfaces/IUser';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate: NavigateFunction = useNavigate();

  const { setId, setAdmin, setFirstname } = useContext(CurrentUserContext);

  function redirectHome() {
    navigate('/');
  }

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    // indispensable quand on veut utiliser async/await dans un useEffect
    try {
      e.preventDefault();
      const { data } = await axios.post<IUser>(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password },
        {
          // for cookies
          withCredentials: true,
        },
      );
      console.log(document.cookie);
      setErrorMessage('');
      setId(data.id);
      setFirstname(data.firstname);
      setAdmin(data.admin === 1);
      redirectHome();
    } catch (err) {
      // err est renvoyé potentiellement par axios ou par le code, il peut avoir différents types
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 401) {
          setErrorMessage('Email ou mot de passe incorrect');
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error) setErrorMessage(err.message);
      }
    }
  };

  return (
    <>
      <form className="form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
        <input
          className="form__input"
          type="text"
          placeholder="Email"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
        />
        <input
          className="form__input"
          type="password"
          placeholder="Mot de passe"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          value={password}
        />
        <input className="button" type="submit" value="Login" />
        {errorMessage && <span className="form__message">{errorMessage}</span>}
      </form>
    </>
  );
};

export default Login;
