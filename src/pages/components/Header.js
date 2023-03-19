import Image from "next/image"
import funkoIso from "/public/funkologo.svg"
import funkoLogo from "/public/funkotextlogo.svg"
import cartIcon from "/public/cart-icon.svg"
import strokeVector from "/public/strokeVector.svg"
import styles from "./Header.module.css"
import React, { useState } from "react"


const Header = () => {


    const [navTitles, setTitles] = useState(['CONTACT', 'LOGIN']);

    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={funkoIso} width={80.24} height={65.19} alt='Funkoshop app logo' />
                <Image src={funkoLogo} width={270.92} height={30.31} alt='Funkoshop app logo' />
            </div>
            <div className={styles.nav}>
                <div className={styles.shop}>
                    <span>SHOP</span>
                    <Image className={styles.shopStroke} src={strokeVector} width={8.61} height={11.59} alt='Stroke button to open shop' />
                </div>
                {navTitles.map((titles) => (
                    <ul key={titles}>
                        <li>{titles}</li>
                    </ul>
                ))}
                <Image src={cartIcon} width={33} height={31} alt='Cart button' />
            </div>
        </header>
    )
}

export default Header
