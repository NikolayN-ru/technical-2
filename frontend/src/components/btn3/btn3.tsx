import { clickBoardMainMenu } from "../../../redux/actions";
import propsBtn3 from "./btn3.interface";
import styles from "./btn3.module.scss";
import cn from "classnames";
import React, { FC } from "react";
import { connect } from "react-redux";

const Btn3 = ({
  title,
  num,
  active = false,
  clickBoardMainMenu,
}: propsBtn3): JSX.Element => {
  return (
    <div
      onClick={() => clickBoardMainMenu(title)}
      className={cn(styles.btn3, {
        [styles.active]: active,
      })}
    >
      {`${title} ${num}`}
    </div>
  );
};

const mapDispatchToProps = {
  clickBoardMainMenu,
};

export default connect(null, mapDispatchToProps)(Btn3);
