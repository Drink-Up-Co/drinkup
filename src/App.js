
import React from "react";
import { hot } from 'react-hot-loader/root';
import SearchBox from './Components/LeftSide/SearchBox';
import Header from './Components/Header/Header';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Header />
        <SearchBox />
      </>
    );
  }
}

export default hot(App);
