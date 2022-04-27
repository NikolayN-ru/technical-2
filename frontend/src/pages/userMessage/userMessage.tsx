import styles from "./userMessage.module.scss";
import NaviData from "@/src/components/naviData";
import NaviMenu from "@/src/components/naviMenu";
import NaviStatistics from "@/src/components/naviStatistics";
import Image from "next/image";
import { FC } from "react";

const UserMessage: FC = (): JSX.Element => {
  return (
    <div className={styles.board}>
      <div className={styles.navi}>
        <NaviData />
        <NaviMenu />
        <NaviStatistics />
      </div>
      <div className={styles.main}>
        <div className={styles.data}>
          <h1>Нет сообщений</h1>
          <span>
            Обменивайтесь сообщениями и договаривайтесь о покупке и продаже
          </span>
          <Image
            src="/noMessage.png"
            width="106"
            height="90"
            alt="No Message"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
