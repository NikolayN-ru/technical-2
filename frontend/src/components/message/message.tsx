import styles from "./message.module.scss";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

const Massage: FC = (): JSX.Element => {
  const message = useSelector(({ messageData }) => messageData.mes);
  return (
    <div
      className={cn(styles.message, {
        [styles.active]: message.length,
      })}
    >
      {message}
    </div>
  );
};
export default Massage;
