import { propsInput1 } from "./input1.interface";
import styles from "./input1.module.scss";
import { inputQuestion } from "@/redux/actions/index";
import Image from "next/image";
import { FC, useState } from "react";
import { connect } from "react-redux";

const Input1: FC<propsInput1> = ({ inputQuestion }): JSX.Element => {
  const [state, setState] = useState<string>("");

  const changeInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setState(e.target.value);
  };

  const submit = () => {
    inputQuestion(state);
  };

  return (
    <div className={styles.input1}>
      <Image
        className={styles.img1}
        alt="plus"
        src="/search.svg"
        width="16"
        height="16"
      />
      <input
        value={state}
        onChange={changeInput}
        type="text"
        placeholder="Я хочу купить"
      />
      <button onClick={submit}>Найти</button>
    </div>
  );
};

const mapDispatchToProps = {
  inputQuestion,
};

export default connect(null, mapDispatchToProps)(Input1);
