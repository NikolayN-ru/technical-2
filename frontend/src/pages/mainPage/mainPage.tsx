import { mainPageProps } from "./mainPage.interface";
import styles from "./mainPage.module.scss";
import { breadCamps } from "@/redux/actions";
import Dignity from "@/src/components/dignity";
import Image from "next/image";
import { FC, useEffect } from "react";
import { connect } from "react-redux";

// const data = [
// 	{title:'Личные вещи', img:}
// ]

const MainPage: FC<mainPageProps> = ({ breadCamps }): JSX.Element => {
  useEffect(() => {
    breadCamps([]);
  }, [breadCamps]);

  return (
    <div className={styles.mainPage}>
      {/* <h1>Вы ищете:</h1> */}
      {/* {data && data.map((item,id) => <Dignity key={id} {...item}/>)} */}
      {/* <Dignity /> */}
      {/* <button><Image src='/arrow-white-left.svg' width='18' height='10' alt='arrow' /></button> */}
    </div>
  );
};

const mapDispatchToProps = {
  breadCamps,
};

export default connect(null, mapDispatchToProps)(MainPage);
