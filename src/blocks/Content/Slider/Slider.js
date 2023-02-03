
import styles from "./Slider.module.scss"


export const Slider = () => {
	return (
		<div className={styles.Slider}>
			<input type="button" className={styles.item + " " + styles.item__first} value={'<<'} />
			<input type="button" className={styles.item} value={'1'} />
			<input type="button" className={styles.item} value={'2'} />
			<input type="button" className={styles.item} value={'3'} />
			<input type="button" className={styles.item} value={'4'} />
			<input type="button" className={styles.item} value={'5'} />
			<input type="button" className={styles.item + " " + styles.item__last} value={'>>'} />
		</div>
	)
}