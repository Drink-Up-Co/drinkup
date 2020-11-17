
import React from "react";
import { hot } from 'react-hot-loader/root';
import LoginButton from './LoginButton';
import SearchBox from './Components/LeftSide/SearchBox';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
        </h1>
        <LoginButton />
        <SearchBox />
      </>
    );
  }
}

export default hot(App);
