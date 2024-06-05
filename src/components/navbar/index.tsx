import {memo, useState} from "react";
import {NavLink} from "react-router-dom";
import ProfileSvg from "../../assets/svg-icons/profile";
import EventsSvg from "../../assets/svg-icons/events";
import TarifsSvg from "../../assets/svg-icons/tarifs";
import AdviceSvg from "../../assets/svg-icons/adviсe";
import SupportSvg from "../../assets/svg-icons/support";
import LogoutSvg from "../../assets/svg-icons/logout";
import styles from "./style.module.scss";
import "./style-nav.scss";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>(sessionStorage.getItem('active') || '');
  const [link, setLink] = useState<string>(sessionStorage.getItem('URL') || "/events");
  sessionStorage.setItem('active', activeLink);
  sessionStorage.setItem('URL', link);

  const options = {
    onOpen: (url: string, param: string) => {
      setLink(url);
      setActiveLink(param);
    },
    onClose: () => setActiveLink('close')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to="/" onClick={options.onClose} className={styles.link}>
          <ProfileSvg/>
          Профиль
        </NavLink>

        <div className={styles.link_container}>
          <NavLink to={link} onClick={() => options.onOpen(link, 'open')} className={styles.link}>
            <EventsSvg/>
            События
          </NavLink>

          <div className={activeLink === 'open' ? styles.options : styles.hidden}>
            <NavLink to="/events" onClick={() => options.onOpen("/events", 'open')} className={styles.link}>Сохраненные</NavLink>
            <NavLink to="/templates" onClick={() => options.onOpen("/templates", 'open')} className={styles.link}>Шаблоны</NavLink>
          </div>
        </div>

        <NavLink to="/tarifs" onClick={options.onClose} className={styles.link}>
          <TarifsSvg/>
          Тарифы
        </NavLink>

        <NavLink to="/advice" onClick={options.onClose} className={styles.link}>
          <AdviceSvg/>
          Советы
        </NavLink>

        <NavLink to="/support" onClick={options.onClose} className={styles.link}>
          <SupportSvg/>
          Техподдержка
        </NavLink>
      </div>

      <div className={styles.logout}>
        <NavLink to="/login" onClick={options.onClose} className={styles.link}>
          <LogoutSvg/>
          Выйти
        </NavLink>
      </div>
    </div>
  )
}

export default memo(Navbar);