import styles from "./menuDrop.module.scss";
import Image from "next/image";
import MenuDropItem from "./menuDropItem";

const dataItemZero = [
  {title:'Вещи', data: ['Кепки', 'Футболки', 'Джинсы']},
  {title:'data-0', data: ['mackData0',]},
  {title:'mackData-0', data: ['mackData', 'mackData', 'mackData']},
  {title:'mackData', data:['mackData']}
]

const dataItemOne = [
  {title:'Мобильные телефоны', data: ['Смартфоны', 'Xiaomi', 'Samsung', 'Honor', 'Huawei', 'Menzu', 'Nokia', 'Кнопочные телефоны', 'Стилусы']},
  {title:'Гаджеты', data: ['Смарт-часы и браслеты',]},
  {title:'Наушники и гарнитуры', data: ['Проводные', 'Беспроводные']},
  {title:'Запчасти', data: ['Дисплеи', 'Аккумуляторы']},
  {title:'Чехлы для смартфонов'},
  {title:'Аксессуары для телефонов', data:['Зарядные устройста', 'Кабели и адаптеры', 'Внешние аккумуляторы', 'Чехлы', 'Держатели', 'Стилусы', 'Защитные стекла и пленки', 'Карты памяти']}
]

const dataItemTwo = [
  {title:'Вещи', data: ['Кепки', 'Футболки', 'Джинсы']},
  {title:'data-2', data: ['mackData0',]},
  {title:'mackData-2', data: ['mackData', 'mackData', 'mackData']},
  {title:'mackData-2', data:['mackData']},
  {title:'mackData-2', data:['mackData']},
  {title:'mackData-2', data:['mackData']},
  {title:'mackData-2', data:['mackData']}
]

const dataItemTree = [
  {title:'mackData-0', data: ['mackData', 'mackDat-3', 'mackData','mackData','mackData','mackData','mackData','mackData']},
  {title:'mackData-0', data: ['mackData', 'mackDat-3', 'mackData','mackData','mackData','mackData','mackData','mackData']},
  {title:'mackData-0', data: ['mackData', 'mackDat-3', 'mackData','mackData','mackData','mackData','mackData','mackData']},
  {title:'mackData', data:['mackData-3']}
]

const dataAwesome = [
  {title: 'nameCaterory', data: ['no-data']}
]



const data = [
  {id: 1, title:"Личные вещи", url:"", ico:"", dataItem:dataItemZero},
  {id: 2, title:"Телефоны и аксессуары", url:"", ico:"", dataItem:dataItemOne},
  {id: 3, title:"Электроника", url:"", ico:"", dataItem:dataItemTwo},
  {id: 4, title:"Бытовая техника", url:"", ico:"", dataItem:dataItemTree},
  {id: 5, title:"Дом и сад", url:"", ico:"", dataItem:dataAwesome},
  {id: 6, title:"Товары для детей", url:"", ico:"", dataItem:dataAwesome},
  {id: 7, title:"Животные", url:"", ico:"", dataItem:dataAwesome},
  {id: 8, title:"Хобби и отдых", url:"", ico:"", dataItem:[]},
  {id: 9, title:"Транспорт", url:"", ico:"", dataItem:[]},
  {id: 10, title:"Автотовары", url:"", ico:"", dataItem:[]},
  {id: 11, title:"Недвижимость", url:"", ico:"", dataItem:[]},
  // {id: 12, title:"Работа", url:"", ico:"", dataItem:[]},
  // {id: 13, title:"Услуги", url:"", ico:"", dataItem:[]},
  // {id: 14, title:"Для бизнеса", url:"", ico:"", dataItem:[]},
  // {id: 15, title:"Отдам даром", url:"", ico:"", dataItem:[]},
]


const MenuDrop = () => {
  return (
	<div className={styles.menuIco}>
    <div className={styles.icon}>
    <Image src="/burger.svg" width="18px" height="18px" alt="burger" />
    </div>
    <div className={styles.menuDropOne}>
      {data.map((item, id) => <MenuDropItem key={id} {...item} />)}
    </div>

  </div>
  )
}
export default MenuDrop;
