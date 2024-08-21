import { useEffect } from "react";
// import {menuAPi}

const useRestaurant = (resid) => {
  // fetch

  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch("Menuapi" + resid);
    const resinfo = await result.json();
    setresInfo(resinfo);
  };

  return resInfo;
};

export default useRestaurant;
