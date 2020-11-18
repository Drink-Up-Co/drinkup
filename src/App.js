
import React from "react";
import { hot } from 'react-hot-loader/root';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default hot(App);
