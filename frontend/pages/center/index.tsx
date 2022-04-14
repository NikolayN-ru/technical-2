import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoaderSceleton from '@/components/loaderSkeleton';

import LayoutMain from "@/src/layout";
const Center = () => {

  return (
    <LayoutMain>
      center !
      <Skeleton count={5} />
      <hr />
      <LoaderSceleton />
    </LayoutMain>
  );
};

export default Center;

