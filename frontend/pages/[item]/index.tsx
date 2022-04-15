import LayoutMain from "@/src/layout";
import ItemPage from "@/src/pages/item";
import { NextPage } from "next";

const Item:NextPage = (): JSX.Element=> {
  return (
    <LayoutMain>
      <ItemPage />;
    </LayoutMain>
  );
};

export default Item;
