import LoaderSceleton from "@/components/loaderSkeleton";
import LayoutMain from "@/src/layout";
import Center from "@/src/pages/center";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CenterPage = () => {
  return (
    <LayoutMain>
      {/* <Skeleton count={5} /> */}
      {/* <hr /> */}
      {/* <LoaderSceleton /> */}
      <Center />
    </LayoutMain>
  );
};

export default CenterPage;
