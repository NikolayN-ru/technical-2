import styles from "./extension.module.scss";
import MenuDown from "./menuDown";
import Btn1 from "@/src/components/btn1";
import Input1 from "@/src/components/input1";

const Extension = () => {
  return (
    <div className={styles.extension}>
      <MenuDown />
      <Input1 />
      <Btn1 title="Подать объявление" label={true} />
    </div>
  );
};

export default Extension;
