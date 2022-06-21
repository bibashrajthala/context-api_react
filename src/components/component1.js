import Component2 from "./component2";

import { useContext } from "react";
import { Data, LastName } from "../App";

const Component1 = () => {
  const data1 = useContext(Data);
  const last1 = useContext(LastName);

  console.log(data1, "from component1");
  console.log(last1, "from component1");
  return (
    <>
      <h2>{data1.id}</h2>
      <h2>{data1.name}</h2>
    </>
  );
};

export default Component1;
