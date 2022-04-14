import { propsBreadCamps } from "./breadCamps.interface";
import styles from "./breadCamps.module.scss";
import { FC } from "react";
import { connect } from "react-redux";

const BreadCamps:FC<propsBreadCamps> = ({ camps2 }):JSX.Element => {
  const camps: string[] | undefined = camps2;
  return (
    <div className={styles.breadCamps}>
      {camps &&
        camps.map((item: string) => (
          <span className={styles.breadCampsItem} key={item}>
            {" > " + item}
          </span>
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    camps2: state.breadCamps.camps,
  };
};

export default connect(mapStateToProps, null)(BreadCamps);
