import { useContext } from "react";
import { Data, LastName } from "../App";

const Component2 = () => {
  const data2 = useContext(Data);
  const last2 = useContext(LastName);

  console.log(data2, "from component 2");
  console.log(last2, "from component 2");
  return (
    <>
      <h2>fff</h2>
    </>
  );
};

export default Component2;
