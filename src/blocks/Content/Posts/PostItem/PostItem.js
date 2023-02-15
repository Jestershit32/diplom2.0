
import { Link } from "react-router-dom";
import styles from "./PostItem.module.scss"


export const PostItem = ({ item }) => {
	return (
		<div className={styles.PostItem}>
			<div className={styles.Info}>
				<h1 className={styles.H1}>{item.title}</h1>
				<p className={styles.P}>
					{item.info}
				</p>
				<h5 className={styles.H5}>Авторы: {item.creaters}
				</h5>
			</div>
			<div className={styles.Panel}>
				<Link to={"/post/" + item._id}>
					<input className={styles.PanelBtn} type="button" value="Перейти на пост" />
				</Link>
				<input className={styles.PanelBtn} type="button" value="Добавить в Изранное" />
			</div>
		</div>
	)
}