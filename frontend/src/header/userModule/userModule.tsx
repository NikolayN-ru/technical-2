import City from "./city/city";
import styles from "./userModule.module.scss";
import Image from "next/image";
import { FC } from "react";
import { connect } from "react-redux";

const UserModule: FC = (): JSX.Element => {
  return (
    <div className={styles.userModule}>
      <Image src="/position.svg" width="30px" height="100%" alt="logo" />
      <City />
      <Image src="/arrow-down.svg" width="16px" height="100%" alt="logo" />
      <Image src="/don.svg" width="16px" height="100%" alt="logo" />
      <Image src="/message.svg" width="16px" height="100%" alt="logo" />
      <Image src="/like.svg" width="16px" height="100%" alt="logo" />
      <Image src="/avatar.png" width="30px" height="30px" alt="logo" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
  };
};

export default connect(null, null)(UserModule);
