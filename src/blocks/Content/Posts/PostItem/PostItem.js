import { Link } from "react-router-dom";
import styles from "./PostItem.module.scss"


export const PostItem = ({ item, key }) => {
	return (
		<div className={styles.PostItem}>
			<div className={styles.Info}>
				<h1 className={styles.H1}>{item}</h1>
				<p className={styles.P}>
					{""}
				</p>
				<h5 className={styles.H5}>Автор:
					<Link to={""} className={styles.A}>{""}</Link>
				</h5>
			</div>
			<div className={styles.Panel}>
				<Link to={"/page/" + item}>
					<input className={styles.PanelBtn} type="button" value="Перейти на пост" />
				</Link>
				<input className={styles.PanelBtn} type="button" value="Добавить в Изранное" />
			</div>
		</div>
	)
}