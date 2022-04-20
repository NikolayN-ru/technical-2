import {
  ADD_CART_ITEM,
  BONUS_CART_ITEM,
  DATA_ITEM,
  DEL_CART_ITEM,
  FAVORITES_ADD,
  FAVORITES_DEL,
  USER_NUMBER,
} from "../actionTypes";
import { messageWrite } from "../actions";
import {
  take,
  takeEvery,
  takeLatest,
  select,
  put,
} from "@redux-saga/core/effects";
import { getLatestNews } from "api/index";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

export function* messageDisplay(message: string) {
  yield put<any>(messageWrite(message));
  yield delay(2);
  yield put(messageWrite(""));
}

export function* workerSagaAdd() {
  // const count = yield select(({cartItems}) => cartItems.cart)
  // const data = yield getLatestNews();
  // console.log(data)
  yield messageDisplay("вы добавили товар в корзину");
}

export function* workerSagaDelItem() {
  yield messageDisplay("вы удалили товар из корзины");
}

export function* workerSagafavoritesAdd() {
  yield messageDisplay("товар добавлен в избранное");
}

export function* workerSagafavoritesDel() {
  yield messageDisplay("товар удален из избранного");
}

export function* workerSagaDataItem() {
  yield messageDisplay("данные пользователя в процессе изменения");
}

export function* workerSagaBonus() {
  yield messageDisplay("промокод применен");
}

export function* workerSagaUserNumber() {
  yield messageDisplay("мы вам перезвоним");
}

export function* watchClickSaga() {
  yield takeLatest(ADD_CART_ITEM, workerSagaAdd);
  yield takeEvery(DEL_CART_ITEM, workerSagaDelItem);
  yield takeLatest(FAVORITES_ADD, workerSagafavoritesAdd);
  yield takeLatest(FAVORITES_DEL, workerSagafavoritesDel);
  yield takeLatest(DATA_ITEM, workerSagaDataItem);
  yield takeLatest(BONUS_CART_ITEM, workerSagaBonus);
  yield takeLatest(USER_NUMBER, workerSagaUserNumber);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
