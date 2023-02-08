
import styles from "./ProfileOnPost.module.scss"
import profileSvg from "./5.svg"

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

export const ProfileOnPost = () => {
	return (

		<div className={styles.ProfileOnPost}>
			<img src={profileSvg} className={styles.Svg} alt="" />
			<span className={styles.Text__login}>
				{profile.firstname}
			</span>
			<span className={styles.Text__login}>
				{profile.lastname}
			</span>
			<span className={styles.nickname}>{profile.nickname}</span>
		</div>
	)
}