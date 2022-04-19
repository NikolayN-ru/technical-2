import { changeMenuUpMain } from "@/redux/actions";
import LayoutMain from "@/src/layout";
import BoardPage from "@/src/pages/board";
import UserData from "@/src/pages/userData";
import UserLike from "@/src/pages/userLike";
import UserMessage from "@/src/pages/userMessage";
import { NextPage } from "next";
import { useEffect } from "react";
import { connect } from "react-redux";

const Board: NextPage = ({ menu, changeMenuUpMain }): JSX.Element => {
  useEffect(() => {
    changeMenuUpMain();
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

const mapStateToProps = (state) => {
  return {
    menu: state.naviMenu,
  };
};

const mapDispatchToProps = {
  changeMenuUpMain,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
