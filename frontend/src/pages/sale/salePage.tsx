import styles from "./salePage.module.scss";
import { changeMenuSale } from "@/redux/actions";
import { FC, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

const SalePage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeMenuSale());
  }, []);
  return <div>SalePage</div>;
};

export default SalePage;
