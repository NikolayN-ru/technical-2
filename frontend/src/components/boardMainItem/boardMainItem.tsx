import Btn1 from "../btn1";
import { BoardMainItemProps } from "./boardMainItem.interface";
import styles from "./boardMainItem.module.scss";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const BoardMainItem = ({ stoped = true, item:{id, title, price, city, day, like} }: BoardMainItemProps): JSX.Element => {
  return (
	  <Link href={`/${id}`}>
    <div className={styles.item}>
      <div className={styles.itemDescLeft}>
        <input type="checkbox" />
        <Image src="/23.png" width="90px" height="123px" alt="phone" />
        <div className={styles.itemDescLeftTitle}>
          <p>Телефон {title} </p>
          <span>{price} ₽</span>
          <p>{city}</p>
          <Btn1 title="Опубликовать повторно" more={true} />
        </div>
      </div>
      <div className={styles.itemDescRight}>
        <div className={styles.rings}>
          <Image src="/ring.svg" width="17px" height="5px" alt="rings" />

          <div className={styles.ringsMenu}>
            <p>Продать быстрее</p>
            <p>Редактировать</p>
            <p>Снять с публикации</p>
            <p>Статистика</p>
          </div>
        </div>
        {stoped && (
          <div className={styles.label}>
            <p>Приостановлено</p>
          </div>
        )}

        <div className={styles.progressBar}>
          <Image
            src="/progressBar.svg"
            width="41px"
            height="7px"
            alt="progressBar"
          />
          <span>Осталось {day} дней </span>
        </div>
        <div className={styles.ico}>
          <Image src="/sold.svg" width="17px" height="17px" alt="progressBar" />
          <Image
            src="/statistic.svg"
            width="17px"
            height="17px"
            alt="progressBar"
          />

          <Image src="/ies.svg" width="17px" height="17px" alt="progressBar" />
          <span>30 + 4</span>
          <Image
            src="/likeF.svg"
            width="17px"
            height="17px"
            alt="progressBar"
          />
          <span>{like}</span>
        </div>
      </div>
    </div>
	</Link>
  );
};

export default BoardMainItem;
