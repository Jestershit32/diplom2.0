// import { useEffect, useState } from "react"
import styles from "./ProfileOnPost.module.scss"
import profileSvg from "./5.svg"
import { Link, } from "react-router-dom";
import { useProfile } from "../../../hooks.js"

export const ProfileOnPost = ({ profileId }) => {

	const Profile = useProfile(profileId)





	return (
		<Link to={"/profile/" + profileId}>
			<div className={styles.ProfileOnPost}>
				<img src={Profile.img ? Profile.img : profileSvg} className={styles.Svg} alt="" />
				<span className={styles.Text__login}>
					{Profile.firstname}
				</span>
				<span className={styles.Text__login}>
					{Profile.lastname}
				</span>
				<span className={styles.nickname}>{Profile.nickname}</span>
			</div>
		</Link>
	)

}