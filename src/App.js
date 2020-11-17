
import React from "react";
import { hot } from 'react-hot-loader/root';
import LoginButton from './LoginButton';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello Nelson
        </h1>
        <LoginButton />
      </>
    );
  }
}

export default hot(App);
