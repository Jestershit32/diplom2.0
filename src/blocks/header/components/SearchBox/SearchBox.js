
import { useState } from "react";
import styles from "./SearchBox.module.scss"


export const SearchBox = (props) => {
	const [searchValue, setSearchValue] = useState("");



	function searchClick() {
		if (searchValue) {
			alert(searchValue)
		}
	}
	function stylefiltBtn(bool) {
		return bool ? styles.FilterCheck__on : ''
	}


	return (
		<div className={styles.SearchBox}>
			<input className={[styles.FilterCheck + " " + stylefiltBtn(props.statusFilter)]} type="button" onClick={props.statuser} value="Фильтр" />
			<input className={styles.SearchInput} type="text" placeholder="Поиск" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
			<input className={styles.SearchBtn} type="button" onClick={searchClick} value="Поиск" />
		</div>
	)
}