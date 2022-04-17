import { propsBreadCamps } from "./breadCamps.interface";
import styles from "./breadCamps.module.scss";
import { FC } from "react";
import { connect } from "react-redux";
import Link from 'next/link';

const BreadCamps:FC<propsBreadCamps> = ({ camps2 }):JSX.Element => {
  const camps: string[] | undefined = camps2;
  return (
    <div className={styles.breadCamps}>
      {camps &&
        camps.map((item: string, id) => (
          <span className={styles.breadCampsItem} key={id}>
            {item !== 'главная страница' ? " > " + item: <Link href='/'><a>{item}</a></Link>}
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
