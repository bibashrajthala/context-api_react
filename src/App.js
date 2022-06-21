import { createContext } from "react";

import Component1 from "./components/component1";
import Component2 from "./components/component2";

const data = {
  id: 1,
  name: "bib",
};

const lname = "RAjthala";

export const Data = createContext(data);
export const LastName = createContext(lname);
function App() {
  return (
    <div className="App">
      <Data.Provider value={data}>
        <LastName.Provider value={lname}>
          <Component1 />
          <Component2 />
        </LastName.Provider>
        {/* <Component2 /> */}
      </Data.Provider>

      <Component2 />
    </div>
  );
}

export default App;
