import NProgress from "nprogress";
import { useEffect } from "react";

export const LazyLoad = () => {
  // useEffect(() => {
  //   NProgress.start();

  //   return () => {
  //     NProgress.stop();
  //   };
  // });

  return <p>Loading...</p>;
};
