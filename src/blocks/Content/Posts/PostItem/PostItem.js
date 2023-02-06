
import styles from "./PostItem.module.scss"


export const PostItem = () => {
	return (
		<div className={styles.PostItem}>
			<div className={styles.Info}>
				<h1 className={styles.H1}>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру</h1>
				<p className={styles.P}>
					Сайт рыбатекст поможет дизайнеру, верстальщику,
					вебмастеру сгенерировать несколько абзацев более
					менее осмысленного текста рыбы на русском языке,
					а начинающему оратору отточить навык публичных
					выступлений в домашних условиях. При создании
					генератора мы использовали небезизвестный
					универсальный код речей. Текст генерируется
					абзацами случайным образом от двух до десяти

				</p>
				<h5 className={styles.H5}>Автор:
					<a href="sdga" className={styles.A}>валера_33</a>
				</h5>
			</div>
			<div className={styles.Panel}>
				<input className={styles.PanelBtn} type="button" value="Перейти на пост" />
				<input className={styles.PanelBtn} type="button" value="Добавить в Изранное" />
			</div>
		</div>
	)
}