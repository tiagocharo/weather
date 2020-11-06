import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { usePosition } from "../hooks/usePostion";

export default function Splash({ history }) {
  const { latitude, longitude, error } = usePosition();
  useEffect(() => {
    const handleLocation = () => {
      if (error) {
        alert(error);
        return;
      }
      if (latitude && longitude) {
        history.push({
          pathname: "/home",
          state: {
            latitude,
            longitude,
          },
        });
      }
    };

    setTimeout(() => {
      handleLocation();
    }, 2000);
  }, [history, latitude, longitude, error]);

  return <Loading />;
}
