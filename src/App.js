
import React, { useState, createContext, useContext } from "react";
import { hot } from 'react-hot-loader/root';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

export const ListContext = createContext([[], () => {}]);

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  return (
    <>
      <ListContext.Provider value={[cocktailList, setCocktailList]} >
        <Header />
        <h1 className="text-4xl text-white bg-black">
        </h1>
        <Main />
        {/* <SearchBox setCocktailList={setCocktailList}/> */}
      </ListContext.Provider>
    </>
  );
}

export default hot(App);
