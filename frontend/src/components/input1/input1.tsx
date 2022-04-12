import React, {useState, useEffect} from "react";
import { propsInput1 } from "./input1.interface";
import styles from "./input1.module.scss";
import Image from "next/image";
import {connect} from 'react-redux';
import {inputQuestion} from '../../../redux/actions/index';

const Input1 = ({inputQuestion}: propsInput1) => {
  const [state, setState] = useState('')

  const changeInput = (e) => {
    console.log(e.target.value)
    setState(e.target.value)
  }

  const submit = () => {
    inputQuestion(state)
  }

  return (
    <div className={styles.input1}>
      <Image
        className={styles.img1}
        alt="plus"
        src="/search.svg"
        width="16"
        height="16"
      />
      <input value={state} onChange={changeInput} type="text" placeholder="Я хочу купить" />
      <button onClick={submit}>Найти</button>
    </div>
  );
};

const mapDispatchToProps = {
  inputQuestion,
  
}

export default connect(null, mapDispatchToProps)(Input1);
