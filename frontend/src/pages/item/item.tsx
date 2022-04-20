import styles from "./item.module.scss";
import Btn1 from "@/src/components/btn1";
import { titleMerge } from "config/seo.config";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { breadCamps, changeMenuUpMain, fetchItem } from "redux/actions";

// data2: state.marketData.data,

const ItemPage: FC = ({ fetchItem, data, breadCamps, changeMenuUpMain }): JSX.Element=> {
  // const data2 = useSelector(({marketData}) => marketData.data)
  const [state, setState] = useState(0);
  const router = useRouter();
  const { item } = router.query;
  const item2 = Number(item);

  console.log(data)
  // if(!data){
  //   data = data2
  // }

  useEffect(() => {
    setState(item2);
  }, [item2]);

  useEffect(() => {
    fetchItem(state);
    breadCamps(["доска объявлений", data && data.title]);
    changeMenuUpMain();
  }, [state, data]);

  return (
    <div className={styles.item}>
      <Head>
        <title>{data && titleMerge(data.title)}</title>
      </Head>
      <h1>{data && data.title}</h1>
      <div className={styles.blockItem}>
        <div className={styles.descriptionItem}>
          <div className={styles.itemPhotoItem}>
            <Image src='/124.png' width="430" height="430" alt="item" />
            <div className={styles.itemPhotoLike}>
              <Image src="/like.svg" width="23px" height="20px" alt="like" />
              {/* <Image src="/likeF.svg" width="23" height="20" alt="like" /> */}
            </div>
            <div className={styles.itemPhotoArrowLeft}>
              <Image
                src="/arrow-left.svg"
                width="23px"
                height="20px"
                alt="arrow"
              />
            </div>
            <div className={styles.itemPhotoArrowRight}>
              <Image
                src="/arrow-right.svg"
                width="23px"
                height="20px"
                alt="arrow"
              />
            </div>
          </div>
          <div className={styles.descriptionItemText}>
            <h3>Описание товара</h3>
            <p>
              Продаю IPhone XS, абсолютно новый, в комплекте идёт только коробка
              и сам телефон, проверить сможете при встрече.
            </p>
          </div>
          <div className={styles.descriptionItemHaracteristic}>
            <h3>Основные характеристики</h3>
            <p>--lorem--</p>
          </div>
        </div>
        <div className={styles.offerItem}>
          <div className={styles.offerItemBlock}>
            <p>Цена {data && data.price} ₽</p>
            <Btn1 title="Продать быстрее" more={true} />
            <Btn1 title="Статистика" more={true} />
            <Btn1 title="Снять с публикации" more={true} />
            <div className={styles.offerItemBlockOptions}>
              <p>В избранном: 10</p>
              <p>Просмотры:: 130</p>
              <p>Размещено:: 12.06.2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.itemData.data,
  };
};

const mapDispatchToProps = {
  fetchItem,
  breadCamps,
  changeMenuUpMain,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
