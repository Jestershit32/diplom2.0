
import styles from "./ProfileOtdels.module.scss"


export const ProfileOtdels = () => {
	return (
		<div className={styles.ProfileOtdels}>
			<button className={styles.button}>Опубликованное</button>
			<button className={styles.button}>Избранное</button>
		</div>
	)
}