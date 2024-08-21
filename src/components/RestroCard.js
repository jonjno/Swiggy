import { useContext } from "react";
import { CON_URL } from "../utils/constant";
import UserContext from "../utils/UseerContect";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

const RestroCrad = (props) => {
  const Style = {
    backgroundColor: "#f0f0f0",
  };

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(additem(props.name));
  };

  const { loggedInUser } = useContext(UserContext);
  // const {name,cusine}=props
  return (
    <div
      className='res-card m-4 p-4 w-[200px] rounded-lg hover:bg-gray-300'
      // style={Style}
    >
      <img
        src={CON_URL}
        style={{ width: "100px", height: "120px" }}
        className='items-center rounded-lg'
      ></img>
      <h3 className='font-bold text-lg'>{props.name}</h3>
      <h4>{props.cusine}</h4>
      <h4>{props.star}</h4>
      <h4>ETA :30 min</h4>
      <h4>User: {loggedInUser}</h4>
      <button
        onClick={() => {
          handleAddItem(props.name);
        }}
      >
        Add
      </button>
    </div>
  );
};

export const promotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-3 p-0.75 rounded-sm'>
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCrad;
