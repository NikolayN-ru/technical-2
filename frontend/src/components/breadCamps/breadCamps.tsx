import { propsBreadCamps } from "./breadCamps.interface";
import styles from "./breadCamps.module.scss";
import { FC } from "react";
import { connect } from "react-redux";

// const BreadCamps: FC<propsBreadCamps> = ({
//    ...links
// }: propsBreadCamps): JSX.Element => {
//   // console.log(camps2, 'camps2')
//   const camps: string[] = [];
//   for (let key in links) {
//     camps.push(links[key] + " > ");
//   }
//   camps[camps.length - 1] = camps[camps.length - 1].substring(
//     0,
//     camps[camps.length - 1].length - 3
//   );
//   return (
//     <div className={styles.breadCamps}>
//       {camps.map((item: string) => (
//         <span className={styles.breadCampsItem} key={item}>
//           {item}
//         </span>
//       ))}
//     </div>
//   );
// };

const BreadCamps:FC<propsBreadCamps> = ({ camps2 }: propsBreadCamps) => {
  const camps: string[] | undefined = camps2;
  return (
    <div className={styles.breadCamps}>
      {camps &&
        camps.map((item: string) => (
          <span className={styles.breadCampsItem} key={item}>
            {" > " + item}
          </span>
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    camps2: state.breadCamps.camps,
  };
};

export default connect(mapStateToProps, null)(BreadCamps);
