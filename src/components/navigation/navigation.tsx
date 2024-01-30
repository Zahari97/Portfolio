import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss';
import { Toggle } from '../toggle/toggle';
import MyContext from '../../services/context';


const Navigation = () => {
  const [openedNav, setOpenedNav] = useState(false);
  const [isDark,setIsDark] = useState(true)
  const context = useContext(MyContext);
  context?.setIsDark(isDark);
  const wrapperNavRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`${styles.Header} ${openedNav ? `${styles.isActive}` : ''}`}>
      <div className="Shell">
        <div className={`${styles.Header_inner} ${openedNav ? `${styles.isActiveInner}` : ''}`}>
          <div className={styles.Logo}>
            <Link to='/'>
              <span>Portfolio</span>
            </Link>
          </div>
          <div>
          <Toggle handleChange={()=>setIsDark(!isDark) } isChecked={isDark} />
          </div>

          <div className={styles.WrapperHamburger} onClick={()=> setOpenedNav(!openedNav)}>
            <div id="hamburgerButton" 
              className={`${styles.Hamburger} ${openedNav ? `${styles.isActive}` : ''}`}>
              <div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={wrapperNavRef}  className={styles.wrapperNav}>
        <Link to="/">
          Investigation
        </Link>
        <Link to="/settings ">
        Settings
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
