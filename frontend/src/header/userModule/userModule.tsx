import styles from "./userModule.module.scss";
import Image from "next/image";
import { FC } from "react";

const UserModule: FC = () => {
  return (
    <div className={styles.userModule}>
      <Image src="/position.svg" width="30px" height="100%" alt="logo" />
      <span>Москва</span>
      <Image src="/arrow-down.svg" width="16px" height="100%" alt="logo" />
      <Image src="/don.svg" width="16px" height="100%" alt="logo" />
      <Image src="/message.svg" width="16px" height="100%" alt="logo" />
      <Image src="/like.svg" width="16px" height="100%" alt="logo" />
      <Image src="/avatar.png" width="30px" height="30px" alt="logo" />
    </div>
  );
};

export default UserModule;
