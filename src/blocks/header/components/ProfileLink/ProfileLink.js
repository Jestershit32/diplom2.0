import icon from "./5.svg"
import styles from "./ProfileLink.module.scss"


export const ProfileLink = (props) => {

	const profile = { ...props.profile };

	function validateimg(profile) {
		return profile.image === "" ? icon : profile.image;
	}

	function ProfileLink() {
		alert("ну типо перенес")
	}



	const profileLogin = <>
		<div onClick={ProfileLink} className={styles.ProfileLink}>
			<img src={validateimg(profile)} className={styles.Svg} alt="" />
			<span className={styles.Text__login}>
				{profile.firstname}
			</span>
			<span className={styles.Text__login}>
				{profile.lastname}
			</span>
			<span className={styles.nickname}>{profile.nickname}</span>
		</div>
	</>
	const profileLogout = <>
		<div className={styles.ProfileLink} >
			<img src={icon} className={styles.Svg} alt="" />
			<span className={styles.Text__logout}>Войти</span>
		</div>
	</>



	if (profile !== "") {
		return (profileLogin)
	} else {
		return (profileLogout)
	}
}