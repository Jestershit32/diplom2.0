
import styles from "./header.module.scss"
import { Link } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProfileLink } from "./components/ProfileLink/ProfileLink";
import { Logo } from "./components/Logo/Logo";


export const Header = ({ searchOff, profOff }) => {


    return (
        <header className={styles.Header} >
            <Link to="/" >
                <Logo />
            </Link>
            {!searchOff ? <SearchBox /> : ""}
            {!profOff ?
                <ProfileLink />
                : ""}
        </header>
    )

}