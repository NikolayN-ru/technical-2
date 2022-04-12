import styles from "./item.module.scss";
import Btn1 from "@/src/components/btn1";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchItem } from "redux/actions";

const Item = ({ fetchItem, data }) => {
  const [state, setState] = useState(null);
  // const [router, setRouter] = useState(0)
  const { asPath } = useRouter();
  const idxItem = Number(asPath.split("/")[1]);
  useEffect(() => {
    const item = fetchItem(idxItem);
    setState(item);
  }, []);

  // setState(idxItem)
  // useEffect(()=>{
  // let itemData = fetchItem(state)
  // setRouter(number(idxItem))
  // setState(itemData)
  // }, [])

  // useState(()=>{
  //   let itemData = fetchItem(idxItem)
  // },[])

  if (!data) {
    return <>loading</>;
  }

  return (
    <div className={styles.item}>
      <h1>{data.title}</h1>
      <div className={styles.blockItem}>
        <div className={styles.descriptionItem}>
          <div className={styles.itemPhotoItem}>
            <Image src="/124.png" width="430" height="430" alt="item" />
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
            <p>Цена {data.price} ₽</p>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
