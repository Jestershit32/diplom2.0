
import styles from "./ProfileUser.module.scss"
import { ProfileOtdels } from "./ProfileOtdels/ProfileOtdels"


export const ProfileUser = ({ User }) => {
	return (<>
		<div className={styles.ProfileUser}>
			<img className={styles.image} src={User.image ? User.image : ""} alt={User.image} />
			<div className={styles.info}>
				<div className={styles.name}>
					<span className={styles.firstname}>{User.firstname}</span>
					<span className={styles.lastname}>{User.lastname}</span>
				</div>
				<span className={styles.nickname}>{User.nickname}</span>
				<span className={styles.label}>Дата рождения</span>
				<div className={styles.birthday}>

					<span className={styles.day + " " + styles.date}>{User.birthday.day}</span>
					<span className={styles.month + " " + styles.date}>{User.birthday.month}</span>
					<span className={styles.age}>{User.birthday.age}</span>
				</div>
			</div>
			<div className={styles.option}>
				<button className={styles.button}>Изменить данные</button>
				<button className={styles.button + " " + styles.button__red}>Удалить профиль</button>
				<button className={styles.button}>Выйти из профиля</button>
			</div>
		</div>
		<ProfileOtdels />
	</>
	)
}