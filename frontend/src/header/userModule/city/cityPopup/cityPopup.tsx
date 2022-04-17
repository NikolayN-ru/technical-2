import styles from "./cityPopup.module.scss";
import { mainCity } from "@/redux/actions";
import { useState } from "react";
import { connect } from "react-redux";

const CutyPopup = ({ toggleState, city, mainCity }) => {
  const [state, setState] = useState<string[]>(city);

  const changeCitys = (e) => {
    if (e.target.value == "") {
      return setState(city);
    }
    const newState = state.filter((el) => el.includes(e.target.value));
    setState(newState);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.input}>
        <input onChange={changeCitys} type="text" placeholder="введите город" />
      </div>
      <button className={styles.btn} onClick={toggleState}>
        close
      </button>
      <ul>
        {state &&
          state.map((item, id) => (
            <li onClick={() => {mainCity(item); toggleState()}} key={id}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  mainCity,
};

export default connect(null, mapDispatchToProps)(CutyPopup);
