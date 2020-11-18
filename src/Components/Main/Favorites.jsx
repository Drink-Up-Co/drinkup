
import React from "react";
import { hot } from 'react-hot-loader/root';
import Header from '../Header/Header';

class Favorites extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Header />
      </>
    );
  }
}

export default hot(Favorites);
