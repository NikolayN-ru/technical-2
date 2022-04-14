import styles from "./userData.module.scss";
import InputFormUser from "@/src/components/inputFormUser/inputFormUser";
import NaviData from "@/src/components/naviData";
import NaviMenu from "@/src/components/naviMenu";
import NaviStatistics from "@/src/components/naviStatistics";
import { FC } from "react";
import Btn1 from "@/src/components/btn1";

const UserData: FC = (): JSX.Element => {
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
          <InputFormUser text="Имя и фамилия" hint="имя фамилия" />
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
          />
		<Btn1 title='сохранить' more={true}/>
        </div>
      </div>
    </div>
  );
};
export default UserData;
