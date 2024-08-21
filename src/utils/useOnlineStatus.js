import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setonline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonline(true);
    });
    window.addEventListener("offline", () => {
      setonline(false);
    });
  });

  return online;
};

export default useOnlineStatus;
