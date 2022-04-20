import { breadCampsProps } from "./center.interface";
import styles from "./center.module.scss";
import { breadCamps, changeMenuDownService, userNumberData } from "@/redux/actions";
import Btn1 from "@/src/components/btn1";
import Btn4 from "@/src/components/btn4/btn4";
import cn from "classnames";
import { malfunctions, rebootItemsData } from "mockData/centerPage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Center = ({ breadCamps, changeMenuDownService, userNumberData }: breadCampsProps) => {
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    breadCamps(["cервисный центр"]);
    changeMenuDownService();
  }, []);

  const callToAction = () => {
	setState((prev) => !prev);
	userNumberData()
  }
  return (
    <div className={styles.senter}>
      <div className={styles.slider}>
        <Image
          src="/slideSenter1.png"
          width="1440px"
          height="500px"
          alt="slide"
        />
        <div className={styles.description}>
          <p>Просто решаем сложные проблемы</p>
          <span>
            Производим ремонт любой сложности с гарантией. Оставьте заявку на
            ремонт прямо сейчас!
          </span>
          <div className={styles.btn} onClick={() => setState((prev) => !prev)}>
            <Btn1 title="Оставить заявку" more={true} />
            <Btn1 title="Узнать статус ремонта" more={true} />
          </div>
        </div>
      </div>

      <section className={styles.perrmissions}>
        <div className={styles.perrmissionsItem}>
          <span>Быстро</span>
          <Image
            src="/illustration1.png"
            width="100px"
            height="100px"
            alt="illustration"
          />
        </div>
        <div className={styles.perrmissionsItem}>
          <span>С гарантией</span>
          <Image
            src="/illustration2.png"
            width="100px"
            height="100px"
            alt="illustration"
          />
        </div>
        <div className={styles.perrmissionsItem}>
          <span>Профессионально</span>
          <Image
            src="/illustration3.png"
            width="100px"
            height="100px"
            alt="illustration"
          />
        </div>
        <div className={styles.perrmissionsItem}>
          <span>Отличная цена</span>
          <Image
            src="/illustration4.png"
            width="100px"
            height="100px"
            alt="illustration"
          />
        </div>
      </section>

      <section className={styles.reboot}>
        <h2>Мы ремонтируем</h2>
        <div className={styles.rebootItems}>
          {rebootItemsData.map((item, id) => (
            <div key={id} className={styles.item}>
              <Image
                src={item.img}
                width="147px"
                height="106px"
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.malfunctions}>
        <h2>Неисправности</h2>
        <div className={styles.imtes}>
          {malfunctions.map((item, id) => (
            <div className={styles.item} key={id}>
              <Image src="/warning.png" width="20" height="20" alt="warning" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div
        className={cn(styles.callToAction, {
          [styles.active]: state,
        })}
      >
        <h3>Остались вопросы?</h3>
        <p>Остались вопросы?</p>
        <div className={styles.input}>
          <input type="text" placeholder="+ 7 (123)-456-78-90" />
          <div onClick={() => callToAction()}>
            <Btn1 title="Заказать звонок" more={true} />
          </div>
        </div>
        <span>Или позвоните сами - +7 (968) 430-88-20</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  breadCamps,
  changeMenuDownService,
  userNumberData,
};

export default connect(null, mapDispatchToProps)(Center);
