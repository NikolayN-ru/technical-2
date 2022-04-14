import Btn4 from "../btn4/btn4";
import styles from "./inputFormUser.module.scss";

const InputFormUser = ({ text='', hint='', value = "", btn = false, titleBtn='',  img, placeholder='', inputElement=true, select=[], }) => {
  return (
    <div className={styles.inputBlock}>
      <p>{text}</p>
      <div>
	  	{inputElement && <div className={styles.inputMain}>
			  {select.length ? 
				  <select>
					  {select.map((item, id) => <option key={id}>{item}</option>)}
				  {/* <option value="1" selected disabled>*/}
			  </select> : 
        <input type="text" placeholder={hint} />
			  }
      </div> }
	  <div className={styles.btn}>
        {btn && <Btn4 title={titleBtn} img={img} />}
	  </div>
	  <p className={styles.paragraph}>{placeholder}</p>
      </div>

    </div>
  );
};
export default InputFormUser;
