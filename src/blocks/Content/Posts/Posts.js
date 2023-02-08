
import styles from "./Posts.module.scss"
import { PostItem } from "./PostItem/PostItem"

export const Posts = ({ currentItems }) => {





	return (
		<div className={styles.Posts}>
			{currentItems.map((item, key) => <PostItem item={item} key={key} />)}
		</div>
	)
}