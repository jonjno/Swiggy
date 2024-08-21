import React from "react";
import { useParams } from "react-router-dom";
// import useRestaurant from '';

const Restaurant = () => {
  //   const par = useParams();
  const { id } = useParams();

  // useeffect is here and it takes or responsibel for fetching data\
  // now we rae passing it to a custom hooks

  // const ResInfo = useRestaurant(id)
  console.log(id);
  return (
    <div>
      <h1>Name Of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>diet coke</li>
      </ul>
    </div>
  );
};

export default Restaurant;
