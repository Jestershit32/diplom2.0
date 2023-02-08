import styles from "./PostPage.module.scss"

import { ProfileOnPost } from "./ProfileOnPost/ProfileOnPost"

const post = {
	name: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру",
	info: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
	autorPublic: "Автор",
	autorOfPost: "Автор Поста",
	date: "03.02.2022",
	tegs: [
		"хуета, норм, так себе"]
}



export const PostPage = () => {

	return (
		<div className={styles.PostPage}>
			<div className={styles.Post}>
				<div className={styles.Info}>
					<div className={styles.zagol}>
						<ProfileOnPost />
						<h1 className={styles.H1}>

							{post.name}</h1>
					</div>

					<p className={styles.P}>
						{post.info}
					</p>
					<h5 className={styles.H5}>Автор:
						<a href="sdga" className={styles.A}>{post.autorOfPost}</a>
					</h5>
					<h5 className={styles.H5}>
						{post.date}
					</h5>

				</div>
				<div className={styles.DocReader}></div>

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