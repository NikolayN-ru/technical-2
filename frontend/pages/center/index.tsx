import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoaderSceleton from '@/components/loaderSkeleton';

const Canter = () => {

  return (
    <div>
      Canter
      <Skeleton count={5} />
      <hr />
      <LoaderSceleton />
    </div>
  );
};

export default Canter;
