
import React, { createContext, useState } from "react";
import { hot } from 'react-hot-loader/root';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const UserContext = createContext(NaN);
export const CardContext = createContext(0);

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e050d',
    },
    secondary: {
      main: '#2a4cab',
    },
  },
});


function App() {
  const [userId, setUserId] = useState(NaN);
  const [newCard, setNewCard] = useState(0);
  return (
    <>
     <CardContext.Provider value={[newCard, setNewCard]} >
      <ThemeProvider theme={mainTheme}>
        <UserContext.Provider value={[userId, setUserId]} >
          <Header setUserId={setUserId} />
          <Main />
        </UserContext.Provider>
      </ThemeProvider>
    </CardContext.Provider>
    </>
  );
}

export default hot(App);
