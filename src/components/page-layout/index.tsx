import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default memo(PageLayout);