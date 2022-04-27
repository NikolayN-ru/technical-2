import { CityInterface } from "./city.interface";
import styles from "./city.module.scss";
import CityItem from "./cityItem";
import CityPopup from "./cityPopup";
import { map } from "ramda";
import React, { FC, useState } from "react";
import { connect } from "react-redux";

const City: FC<CityInterface> = ({ city }): JSX.Element => {
  const [state, setState] = useState<boolean>(false);

  const toggleState = () => {
    setState((prev) => !prev);
  };

  return (
    <div className={styles.city}>
      <span onClick={toggleState}>{city && city.mainCity}</span>
      {/* <div className={styles.cityMenu}>
        {city.city &&
          city.city.map((item) => <CityItem key={item} item={item} />)}
      </div> */}
      {state && <CityPopup toggleState={toggleState} city={city && city.city} />}
    </div>
  );
};

const mapStateToProps = ({ city }: CityInterface) => {
  return { city };
};

export default connect(mapStateToProps, null)(City);
