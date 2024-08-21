import RestroCrad, { promotedLabel } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shrimmer from "./Shrimmer";
import About from "./About";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UseerContect";

const Body = () => {
  const obj = [
    { name: "kfc", cusine: "burger", star: "2", id: 1, promoted: true },
    {
      name: "megha Biriyani",
      cusine: "Biriyani,Asian",
      star: "1",
      id: 2,
      promoted: true,
    },
    { name: "kfc", cusine: "burger", star: "4", id: 3, promoted: true },
    {
      name: "megha Biriyani",
      cusine: "Biriyani, Asian",
      star: "4.5",
      id: 4,
      promoted: true,
    },
    { name: "kfc", cusine: "burger", star: "5", id: 5, promoted: false },
    {
      name: "megha Biriyani",
      cusine: "Biriyani, Asian",
      star: "6.5",
      id: 6,
      promoted: false,
    },
    { name: "kfc", cusine: "burger", star: "3", id: 7, promoted: false },
    {
      name: "megha Biriyani",
      cusine: "Biriyani, Asian",
      star: "4.4",
      id: 8,
      promoted: false,
    },
    { name: "kfc", cusine: "burger", star: "4", id: 9, promoted: false },
  ];

  const Restaurantpromoted = promotedLabel(RestroCrad);

  const [feat, setFaet] = useState(obj);
  const [searchText, setsearchText] = useState("");
  const [filter, setFilter] = useState([]);

  const { loggedInUser, setuserName } = useContext(UserContext);

  useEffect(() => {
    setFilter(obj);
    console.log("useeffect renderd");
  }, []);

  console.log("body Rendered");

  const btnfilter = (filter) => {
    const newfeat = filter.filter((res) => res.star > 4);
    console.log("hai");
    console.log(newfeat);
    setFilter(newfeat);
  };

  //   if (feat.length === 0) {
  //     return <Shrimmer />;
  //   }
  const online = useOnlineStatus();

  if (online === false) return <h1> you are offline </h1>;

  return feat.length === 0 ? (
    <Shrimmer />
  ) : (
    <div className='body'>
      <div className='flex'>
        <div className='m-4 p-4'>
          <input
            type='text'
            className=' border border-solid border-black'
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className='px-4 bg-green-100 m-4'
            onClick={() => {
              const filterrest = feat.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterrest);
              setFilter(filterrest);
            }}
          >
            search
          </button>
        </div>
        <div>
          <button
            className='px-4 py-2 bg-green-100 my-10'
            data-testid='toprated'
            onClick={() => {
              btnfilter(filter);
            }}
          >
            Top Rated Btn
          </button>
          <label>userName</label>
          <input
            className='border border-black'
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className='RestroContainer flex flex-wrap'>
        {filter.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest.id}>
              {rest.promoted ? (
                <Restaurantpromoted
                  name={rest.name}
                  cusine={rest.cusine}
                  star={rest.star}
                />
              ) : (
                <RestroCrad
                  name={rest.name}
                  cusine={rest.cusine}
                  star={rest.star}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
