import icon from "./5.svg"
import styles from "./ProfileLink.module.scss"
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context";
import { useContext } from "react";

export const ProfileLink = () => {
	const context = useContext(UserContext);
	const Profile = context.user;



	if (Profile) {
		return (<Link to={"/profile/" + Profile._id} >
			<div className={styles.ProfileLink}>
				<img src={Profile.image ? Profile.image : icon} className={styles.Svg} alt="" />
				<span className={styles.Text__login}>
					{Profile.firstname}
				</span>
				<span className={styles.Text__login}>
					{Profile.lastname}
				</span>
				<span className={styles.nickname}>{Profile.nickname}</span>
			</div>
		</Link>)
	} else {
		return (<Link to={"/login"} >
			<div className={styles.ProfileLink} >
				<img src={icon} className={styles.Svg} alt="" />
				<span className={styles.Text__logout}>Войти</span>
			</div>
		</Link>)
	}
}