
import styles from "./Posts.module.scss"
import { PostItem } from "./PostItem/PostItem"

export const Posts = () => {
	return (
		<div className={styles.Posts}>
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
			<PostItem />
		</div>
	)
}