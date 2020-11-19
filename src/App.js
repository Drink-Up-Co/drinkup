
import React, { createContext, useState } from "react";
import { hot } from 'react-hot-loader/root';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const UserContext = createContext(NaN);

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
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <UserContext.Provider value={[userId, setUserId]} >
          <Header setUserId={setUserId} />
          <Main />
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default hot(App);
