import LayoutMain from "@/src/layout";
import BoardPage from "@/src/pages/board";
import UserData from "@/src/pages/userData";
import UserLike from "@/src/pages/userLike";
import UserMessage from "@/src/pages/userMessage";
import { connect } from "react-redux";

const Board = ({ menu }) => {
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

export default connect(mapStateToProps, null)(Board);
