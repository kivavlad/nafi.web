import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(LoginLayout);