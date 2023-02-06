
import styles from "./header.module.scss"

import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProfileLink } from "./components/ProfileLink/ProfileLink";
import { Logo } from "./components/Logo/Logo";


export const Header = () => {

    return (
        <header className={styles.Header} >
            <Logo />
            <SearchBox />
            <ProfileLink />
        </header>
    )

}