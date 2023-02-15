
import styles from "./Posts.module.scss"
import { PostItem } from "./PostItem/PostItem"

export const Posts = ({ currentItems }) => {
	return (
		<div className={styles.Posts}>
			{currentItems.map((item) => <PostItem
				key={item._id}
				item={item}
			/>)}
		</div>
	)
}