import LoaderSceleton from "@/components/loaderSkeleton";
import LayoutMain from "@/src/layout";
import Center from "@/src/pages/center";
import { NextPage } from "next";
import "react-loading-skeleton/dist/skeleton.css";

const CenterPage:NextPage = (): JSX.Element=> {
  return (
    <LayoutMain>
      <Center />
    </LayoutMain>
  );
};

export default CenterPage;


