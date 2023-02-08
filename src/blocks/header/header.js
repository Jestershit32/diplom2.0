
import styles from "./header.module.scss"
import { Link } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProfileLink } from "./components/ProfileLink/ProfileLink";
import { Logo } from "./components/Logo/Logo";


const profile = {
    nickname: "leha1337",
    firstname: "Алексей",
    lastname: "Иванов",
    image: "",
    birthday: {
        age: 2000,
        month: 9,
        day: 9
    }
}


export const Header = () => {

    return (
        <header className={styles.Header} >
            <Link to="/">
                <Logo />
            </Link>
            <SearchBox />
            <ProfileLink profile={profile} />
        </header>
    )

}