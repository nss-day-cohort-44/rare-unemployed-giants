import React, { useState } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const UserContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  const getUserById = (id) => {
    return fetch(`http://localhost:8088/users${id}`)
      .then((res) => res.json())
      .then(setUsers);
  };

  /*
        You return a context provider which has the
        `categories` state, the `addCategory` function,
        and the `getCategory` function as keys. This
        allows any child elements to access them.
    */
  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        getUserById,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
