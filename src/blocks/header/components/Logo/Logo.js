import logo from "./2.svg";
import styles from "./Logo.module.scss"


export const Logo = () => {
	return (
		<div className={styles.Logo}>
			<img src={logo} alt={logo} className={styles.LogoSvg} />
			<span className={styles.Text} >Хранилище</span>
		</div>
	)
}