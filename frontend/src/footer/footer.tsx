import City from "../header/userModule/city/city";
import styles from "./footer.module.scss";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.topLine}>
        <div className={styles.logo}>
          <Image src="/logo.svg" width="72" height="30" alt="logo" />
          <City />
        </div>
        <div className={styles.social}>
          <span>Присоединяйтесь к нам </span>
          <Image src="/fb.svg" width="19" height="19" alt="fb" />
          <Image src="/insta.svg" width="19" height="19" alt="insta" />
          <Image src="/vk.svg" width="19" height="19" alt="vk" />
        </div>
      </div>
      <div className={styles.main}>
        <ul>
          <p>Доска объявлений</p>
          <li>Объявления</li>
          <li>Магазины</li>
          <li>Благотворительность</li>
          <li>Личный кабинет</li>
        </ul>
        <ul>
          <p>Сервисный центр</p>
          <li>Что мы чиним</li>
          <li>Адреса сервисных центров</li>
        </ul>
        <ul>
          <p>Интернет-магазин</p>
          <li>Каталог товаров</li>
          <li>Доставка и оплата</li>
          <li>Корзина</li>
          <li>Личный кабинет</li>
          <li>Контакты</li>
          <li>Вакансии</li>
        </ul>
        <ul>
          <p>Пользователям</p>
          <li>Гарантии</li>
          <li>Доставка и оплата</li>
          <li>Служба поддержки</li>
          <li>Вопрос-ответ</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.links}>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
          <p>Использование cookies</p>
          <p>Карта сайта</p>
        </div>
        <div className={styles.logoLink}>
          <p>Dily.ru 2021©</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
