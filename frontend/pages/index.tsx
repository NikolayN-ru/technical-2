import LayoutMain from "@/src/layout";
import MainPage from "@/src/pages/mainPage";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <LayoutMain>
      <MainPage />
    </LayoutMain>
  );
};

export default Home;
