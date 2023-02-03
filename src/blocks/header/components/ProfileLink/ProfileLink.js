import icon from "./5.svg"
import styles from "./ProfileLink.module.scss"


export const ProfileLink = () => {
	return (
		<div className={styles.ProfileLink}>
			<img src={icon} className={styles.Svg} alt="" />
			<span href="relfl" className={styles.Text}>Войти</span>
		</div>
	)
}