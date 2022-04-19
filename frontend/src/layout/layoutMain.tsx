import BreadCamps from "@/src/components/breadCamps";
import Footer from "@/src/footer";
import Header from "@/src/header";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";
import Massage from "../components/message/message";

const LayoutMain: FC<ReactNode> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Massage/>
      <BreadCamps />
      <NextNProgress height={6} />
      {children}
      <Footer />
    </>
  );
};
export default LayoutMain;
