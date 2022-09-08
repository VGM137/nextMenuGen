import React from "react";
import styles from '../assets/styles/App.module.scss'

const Layout = (props) => {

  return(
    <div id='principal' className={styles.Principal}>
      {props.children}
    </div>
  )
}

export default Layout