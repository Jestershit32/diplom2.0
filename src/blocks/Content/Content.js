import { Slider } from "./Slider/Slider.js";
import styles from "./Content.module.scss"


export const Content = () => {
	return (
		<div className={styles.Content}>
			<Slider />
		</div>
	)
}