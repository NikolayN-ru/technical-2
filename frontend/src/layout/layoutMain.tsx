import BreadCamps from "@/src/components/breadCamps";
import Footer from "@/src/footer";
import Header from "@/src/header";
import NextNProgress from "nextjs-progressbar";
import { FC, ReactNode } from "react";

const LayoutMain: FC<ReactNode> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <BreadCamps />
      <NextNProgress height={6} />
      {children}
      <Footer />
    </>
  );
};
export default LayoutMain;
