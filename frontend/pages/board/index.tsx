import { breadCamps, checkItems } from "../../redux/actions";
import styles from "./board.module.scss";
import BoardMainItem from "@/src/components/boardMainItem";
import Btn3 from "@/src/components/btn3";
import Image from "next/image";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import NaviData from "@/src/components/naviData";
import NaviMenu from "@/src/components/naviMenu";
import NaviStatistics from "@/src/components/naviStatistics";

const Board = ({ breadCamps, stateItems, items, showItems, checkItems }) => {
  useEffect(() => {
    breadCamps(["доска объявлений"]);
    checkItems();
  }, []);
  return (
    <div className={styles.board}>
      <div className={styles.navi}>
      <NaviData />
      <NaviMenu />
      <NaviStatistics />
      </div>
      <div className={styles.main}>
        <div className={styles.mainMenu}>
          {stateItems.items.map((item) => (
            <Btn3
              key={item.id}
              {...item}
              active={item.title == stateItems.active ? true : false}
            />
          ))}
        </div>
        {showItems == "Неактивные" || showItems == "Всего" ? (
          <div className={styles.mainPassive}>
            <div>
              <h2>Неактивные</h2>
              <input type="checkbox" /> <span>Выбрать все</span>
              <span>Снять с публикации</span>
            </div>
            {items.map((item) =>
              item.active == false ? (
                <BoardMainItem key={item.id} item={item} />
              ) : null
            )}
          </div>
        ) : null}
        {showItems == "Активные" || showItems == "Всего" ? (
          <div className={styles.mainActive}>
            <div>
              <h2>Активные</h2>
              <input type="checkbox" /> <span>Выбрать все</span>
              <span>Снять с публикации</span>
            </div>
            {items.map((item) =>
              item.active == true ? (
                <BoardMainItem key={item.id} item={item} />
              ) : null
            )}
          </div>
        ) : null}
        {showItems == "Объявления со ставками" || showItems == "Всего" ? (
          <div className={styles.mainPassive}>
            <div>
              <h2>Объявления со ставками</h2>
              <input type="checkbox" /> <span>Выбрать все</span>
              <span>Снять с публикации</span>
            </div>
            {items.map((item) =>
              item.type == "buy" ? (
                <BoardMainItem key={item.id} item={item} />
              ) : null
            )}
          </div>
        ) : null}
        {showItems == "Продано" || showItems == "Всего" ? (
          <div className={styles.mainPassive}>
            <div>
              <h2>Продано</h2>
              <input type="checkbox" /> <span>Выбрать все</span>
              <span>Снять с публикации</span>
            </div>
            {items.map((item) =>
              item.active == null ? (
                <BoardMainItem key={item.id} item={item} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stateItems: state.boardMainMenu,
    items: state.mockDataItems.data,
    showItems: state.boardMainMenu.active,
  };
};

const mapDispatchToProps = {
  breadCamps,
  checkItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
