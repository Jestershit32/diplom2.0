import styles from "./Slider.module.scss"


export const Slider = ({ totalItems, ItemInPage, setPagPage, PagPage }) => {
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(totalItems / ItemInPage); i++) {
		pageNumber.push(i);
	}

	function isActiv(item) {
		return item !== PagPage ? " .active" : "";
	}

	return (
		<div className={styles.Slider}>
			<input type="button" onClick={() => setPagPage(1)} className={styles.item + " " + styles.item__first} value={'<<'} />
			{
				pageNumber.map((item, key) => <input type="button" onClick={() => setPagPage(item)} className={styles.item + isActiv(key)} value={item} />)
			}

			<input type="button" onClick={() => setPagPage(pageNumber.length)} className={styles.item + " " + styles.item__last} value={'>>'} />
		</div>
	)
}