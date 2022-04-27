import styles from "./btnMobile.module.scss";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

const BtnMobile = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div onClick={() => setState((prev) => !prev)} className={styles.btnMobile}>
      BtnMobile
      <MobileMenu active={state}/>
    </div>
  );
};
export default BtnMobile;
