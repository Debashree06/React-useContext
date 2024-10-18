import React from "react";
import { useUserData } from "./context/UserContext";
const Child = () => {
  const usersData = useUserData();
  console.log(usersData);
  return (
    <div>
      <h1>This is user data</h1>
      <h2>
        {usersData.name} is from {usersData.address}
      </h2>
    </div>
  );
};

export default Child;
