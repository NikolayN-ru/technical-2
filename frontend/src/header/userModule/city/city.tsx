import styles from "./city.module.scss";
import CityItem from "./cityItem";
import { map } from "ramda";
import React, { FC } from "react";
import { connect } from "react-redux";

const City:FC = ({ city }): JSX.Element=> {
  return (
    <div className={styles.city}>
      <span>{city.mainCity}</span>
      <div className={styles.cityMenu}>
        {city.city &&
          city.city.map((item) => <CityItem key={item} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
  };
};

export default connect(mapStateToProps, null)(City);
