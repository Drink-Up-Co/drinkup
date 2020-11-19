
import React, { createContext, useState } from "react";
import { hot } from 'react-hot-loader/root';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

export const UserContext = createContext(NaN);

function App() {
  const [userId, setUserId] = useState(NaN);
  return (
    <>
      <UserContext.Provider value={[userId, setUserId]} >
        <Header setUserId={setUserId} />
        <Main />
      </UserContext.Provider>
    </>
  );
}

export default hot(App);
