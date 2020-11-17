
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
        <h1 className="text-4xl text-white bg-black">
        </h1>
        <SearchBox />
      </>
    );
  }
}

export default hot(App);
