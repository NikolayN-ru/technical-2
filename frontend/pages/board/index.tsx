import LayoutMain from "@/src/layout";
import BoardPage from "@/src/pages/board";
import UserData from "@/src/pages/userData";
import { connect } from "react-redux";

const Board = ({ menu }) => {
  return (
    <LayoutMain>
      {menu.menu[0].active && <BoardPage />}
      {menu.menu[1].active && <UserData />}
      {menu.menu[2].active && <UserData />}
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
