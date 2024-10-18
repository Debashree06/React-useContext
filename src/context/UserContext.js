import { createContext, useContext } from "react";

//create context
const userContext = createContext();

//wrapper component
export function UserDataWrapper(props) {
  const userData = { name: "Virat", age: 36, address: "Delhi" };
  return (
    <>
      <userContext.Provider value={userData}>
        {props.children}
      </userContext.Provider>
    </>
  );
}

//consuming
export function useUserData() {
  return useContext(userContext);
}
