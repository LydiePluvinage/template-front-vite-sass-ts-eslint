import React, { createContext, useState } from 'react';

type TestContent = {
  numberClick: number;
  setNumberClick: React.Dispatch<React.SetStateAction<number>>;
};

type CurrentTestProps = { children: React.ReactNode };

const CurrentTestContext = createContext<TestContent>({
  numberClick: 0,
  setNumberClick: () => {},
});

export const CurrentTestContextProvider = ({ children }: CurrentTestProps) => {
  const [numberClick, setNumberClick] = useState<number>(0);

  return (
    <CurrentTestContext.Provider
      value={{
        numberClick,
        setNumberClick,
      }}>
      {children}
    </CurrentTestContext.Provider>
  );
};

export default CurrentTestContext;
