import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [profilePicture, setProfilePicture] = useState("#");
  return (
    <DataContext.Provider
      value={{
        profilePicture,
        setProfilePicture,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};