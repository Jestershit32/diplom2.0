import { useState } from "react";
import styles from "./header.module.scss"

import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProfileLink } from "./components/ProfileLink/ProfileLink";
import { Logo } from "./components/Logo/Logo";
import { Filter } from "./Filter/Filter";


export const Header = () => {
    const [filterOfOn, setfilterOfOn] = useState(false)

    function filterStat() {
        setfilterOfOn(!filterOfOn)
    }

    return (
        <header className={styles.Header} >
            <Logo />
            <SearchBox statuser={filterStat} statusFilter={filterOfOn} />
            <ProfileLink />
            <Filter status={filterOfOn} />
        </header>
    )

}