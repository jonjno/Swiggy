import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const { name } = props;

  useEffect(() => {
    console.log("ueEfect");
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useeffect return");
    };
  }, []);
  console.log("render");
  return (
    <div className='user-card'>
      <h4>Count = {count}</h4>
      <h2>Name : {name} </h2>
      <h3>Loacatiom :kerala</h3>
      <h4>contact: 6692529857</h4>
    </div>
  );
};

export default User;
