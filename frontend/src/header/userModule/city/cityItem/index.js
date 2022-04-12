import styles from "./cityItem.module.scss";
import React from "react";
import { connect } from "react-redux";
import {mainCity} from '../../../../../redux/actions';

const CityItem = ({ item, mainCity }) => {
  return (
    <div className={styles.cityItem}>
      <button onClick={() => mainCity(item)}>{item}</button>
    </div>
  );
};

const mapDispatchToProps = {
  mainCity,
};

export default connect(null, mapDispatchToProps)(CityItem);
