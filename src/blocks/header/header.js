import React from "react";
import styles from "./header.module.scss"


export const Header = () => {
    return (
        <header className={styles.Header} >
            <img src="" alt="" srcset="" />
            <div className="search">
                <input type="text" value={""} />
                <input type="button" value="search" />
                <input type="button" value="filter" />
            </div>
            <nav>
                <ul>
                    <li><a href="asf">Профиль</a></li>
                    <li><a href="#sad"></a></li>
                </ul>
            </nav>
        </header>
    )

}