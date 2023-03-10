import { useState, useEffect } from "react";
import { usePosts } from "../../../hooks.js"
import { Content } from "../../Content/Content";
import styles from "./ProfileOtdels.module.scss"


export const ProfileOtdels = ({ userId }) => {
	const [Otdel, setOtdel] = useState("publication");
	const [isLoading, setLoading] = useState(true);
	const PublicationPosts = usePosts(userId)
	function isActive(item) {
		return Otdel === item ? ` ${styles.active}` : ''
	}
	useEffect(() => {
		if (PublicationPosts) {
			setLoading(false)
		}
	}, [PublicationPosts])

	function tabOtdel() {
		if (Otdel === "publication") {
			return PublicationPosts
		} else {
			return []
		}
	}

	return (
		<>
			<div className={styles.ProfileOtdels}>
				<button onClick={() => setOtdel("publication")} className={styles.button + isActive("publication")}>Опубликованное</button>
				<button onClick={() => setOtdel("favorites")} className={styles.button + isActive("favorites")}>Избранное</button>
			</div>
			{isLoading ? '' : <Content posts={tabOtdel()} />}
		</>
	)
}