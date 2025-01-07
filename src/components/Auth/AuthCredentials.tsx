import {type MouseEventHandler } from "react";

import {  useAuthContext } from "./AuthContext";
import { Button, Text } from "../../ui";

export const AuthCredentials = () => {
  const { isLoggedIn, toggleValue, logIn, logOut } = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleValue();
  };

  return (
    <div>
      <Text>Is user logged? {isLoggedIn ? "YES" : "NO"}</Text>
      <div className="flex justify-center gap-2">      <Button label="Toggle" onClick={handleClick}></Button>
      <Button label="Log in" onClick={logIn}></Button>
      <Button label="Log out" onClick={logOut}></Button></div>

    </div>
  );
};
