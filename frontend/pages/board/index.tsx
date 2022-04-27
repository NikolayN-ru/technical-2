import { changeMenuUpMain } from "@/redux/actions";
import LayoutMain from "@/src/layout";
import BoardPage from "@/src/pages/board";
import UserData from "@/src/pages/userData";
import UserLike from "@/src/pages/userLike";
import UserMessage from "@/src/pages/userMessage";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Board: NextPage = (): JSX.Element => {
  const menu = useSelector(({ naviMenu }:any) => naviMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeMenuUpMain());
  }, []);
  return (
    <LayoutMain>
      {menu.menu[0].active && <BoardPage />}
      {menu.menu[1].active && <UserMessage />}
      {menu.menu[2].active && <UserLike />}
      {menu.menu[3].active && <UserData />}
      {menu.menu[4].active && <UserData />}
    </LayoutMain>
  );
};

export default Board;
