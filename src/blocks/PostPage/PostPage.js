import styles from "./PostPage.module.scss"
import { ProfileOnPost } from "./ProfileOnPost/ProfileOnPost"



export const PostPage = ({ post }) => {
	return (
		<div className={styles.PostPage}>
			<div className={styles.Post}>
				<div className={styles.Info}>
					<div className={styles.zagol}>
						<ProfileOnPost profileId={post.autorOfPublic} />
						<h1 className={styles.H1}>

							{post.title}</h1>
					</div>

					<p className={styles.P}>
						{post.info}
					</p>
					<h5 className={styles.H5}>Авторы: {post.creaters}
					</h5>
					<h5 className={styles.H5}>
						{post.date}
					</h5>

				</div>
				<div className={styles.DocReader}>{post.urlOnFile}</div>

			</div>
			<div className={styles.Panel}>
				<input
					className={styles.PanelBtn}
					type="button"
					value="Скачать"
				/>
				<input
					className={styles.PanelBtn}
					type="button"
					value="Добавить в Изранное"
				/>
				<input
					className={styles.PanelBtn__creator + " " + styles.PanelBtn}
					type="button"
					value="Обновить"

				/>
				<input
					className={styles.PanelBtn__creator + " " + styles.PanelBtn}
					type="button"
					value="Удалить"

				/>
				<input
					className={styles.PanelBtn__admin + " " + styles.PanelBtn}
					type="button"
					value="Забанить"

				/>
			</div>
		</div>
	)
}