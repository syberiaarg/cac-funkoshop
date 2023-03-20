import Image from "next/image"
import funkoIso from "/public/funkologo.svg"
import styles from "./styles/Footer.module.css"
import React, { useState } from "react"


const Footer = () => {


    const [navTitles, setTitles] = useState(['SHOP', 'SIGN UP', 'LOGIN', 'CONTACT']);

    return (

        <footer className={styles.footer}>

            <div className={styles.nav}>
                {navTitles.map((titles) => (
                    <ul key={titles}>
                        <li>{titles}</li>
                    </ul>
                ))}
            </div>
            <span>All rights reserved 2023 - Funkoshop &copy;</span>
            <div className={styles.logo}>
                <Image src={funkoIso} width={143} height={116.19} alt='Funkoshop app footer logo' />
            </div>
        </footer>
    )
}


export default Footer
