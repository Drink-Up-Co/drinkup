
import React from "react";
import { hot } from 'react-hot-loader/root';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const App = () => {

  return (
    <>
      <h1 className="text-4xl text-white bg-black">
        Hello Nelson
      </h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default hot(App);
