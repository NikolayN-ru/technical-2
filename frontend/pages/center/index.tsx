import LoaderSceleton from "@/components/loaderSkeleton";
import LayoutMain from "@/src/layout";
import Center from "@/src/pages/center";
import { NextPage } from "next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CenterPage:NextPage = (): JSX.Element=> {
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
