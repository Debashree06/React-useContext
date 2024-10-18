import "./App.css";
import Child from "./Child";
import { UserDataWrapper } from "./context/UserContext";

function App() {
  return (
    <>
      <UserDataWrapper>
        <Child />
      </UserDataWrapper>
    </>
  );
}

export default App;
