import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Image from "next/image";
import logo from '../assets/static/sagaz-logo-header.png'
import styles from '../assets/styles/components/Header.module.scss'

const Header = () => {
  return(
    <div className={styles.Header} >
      <div className={styles.headerImgWrapper} >
        <Link href='/'>
          <Image src={logo} layout="fixed" width={50} height={50} alt="logo sagaz" className={styles.headerImg} />
        </Link>
      </div>
      <ul className={styles.headerNav}>
        <Link href="/"><li className={styles.headerNavLink}>Generar menú</li></Link>
        <Link href="/order"><li className={styles.headerNavLink}>Crear orden</li></Link>
      </ul>
    </div>
  )
}

export default connect(null, null)(Header)