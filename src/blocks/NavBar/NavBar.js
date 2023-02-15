
import styles from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom"


export const NavBar = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<ul className={styles.NavBar}>
			<li className={styles.Item} onClick={goBack} >Назад</li>
		</ul >
	)
}