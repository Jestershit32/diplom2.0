import styles from "./Filter.module.scss"
import { FilterForm } from "./FilterForm/FilterForm"

export const Filter = (props) => {

	function open(bool) {
		return bool ? styles.Filter__on : styles.Filter__off;
	}


	return (
		<div className={[styles.Filter + " " + open(props.status)]}>
			<FilterForm />
		</div>
	)
}