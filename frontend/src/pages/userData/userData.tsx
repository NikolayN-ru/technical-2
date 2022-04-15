import styles from "./userData.module.scss";
import InputFormUser from "@/src/components/inputFormUser/inputFormUser";
import NaviData from "@/src/components/naviData";
import NaviMenu from "@/src/components/naviMenu";
import NaviStatistics from "@/src/components/naviStatistics";
import { FC } from "react";
import Btn1 from "@/src/components/btn1";
import {connect} from 'react-redux';

const UserData: FC = (formdata): JSX.Element => {
  return (
    <div className={styles.board}>
      <div className={styles.navi}>
        <NaviData />
        <NaviMenu />
        <NaviStatistics />
      </div>
      <div className={styles.main}>
        <h1>Личные данные</h1>
        <div className={styles.data}>
		  {formdata.formdata.map((item, key) => <InputFormUser key={key} {...item}/>)}
		<Btn1 title='сохранить' more={true}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
	return {
		formdata: state.formUser.formdata
	}
}
export default connect(mapStateToProps, null)(UserData);

  {/* <InputFormUser text="Имя и фамилия" hint="имя фамилия" />
          <InputFormUser
            text="Телефоны"
            hint="телефон"
            value="+ 7 (123) -456- 78 -00"
            btn={true}
            titleBtn="Добавить номер"
          />
          <InputFormUser
            text="E-mail"
            hint="Ivan@inbox.ru"
            value="Ivan@inbox.ru"
          />
          <InputFormUser
            text="Короткое имя"
            hint="IvanPP"
            value="IvanPP"
            placeholder="Укажите короткий адрес вашей страницы, 
чтобы он стал более удобным и запоминающимся"
          />

          <InputFormUser text="Город" select={["Москва", "СПБ", "Omsk"]} />
          <InputFormUser
            text="Станция метро"
            select={["Sadovaya", "Luvniki", "Domodedovo"]}
          />
          <InputFormUser
            text="Мое резюме"
            inputElement={false}
            titleBtn="Добавить резюме"
            placeholder="Данные для работодателей"
            btn={true}
          />
          <InputFormUser
            text="Тип профиля"
            select={["частное лицо", "ИП", "ЮР лица"]}
/> */}