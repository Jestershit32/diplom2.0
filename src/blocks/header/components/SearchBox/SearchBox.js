
import { useState } from "react";
import styles from "./SearchBox.module.scss"


export const SearchBox = () => {
	const [searchValue, setSearchValue] = useState("");



	function searchClick() {
		if (searchValue) {
			alert(searchValue)
		}
	}

	function enterClick(event) {
		if (event.key === "Enter") {
			return searchClick();
		};
	}

	function ChangeSearch(event) {

		setSearchValue(event.target.value)
	}

	return (
		<label htmlFor="search" className={styles.SearchBox}>
			<input
				className={styles.SearchInput}
				type="text"
				placeholder="Поиск"
				onChange={ChangeSearch}
				value={searchValue}
				onKeyDown={enterClick}
			/>

			<input
				id="search"
				className={styles.SearchBtn}
				type="button"
				onClick={searchClick}
				value="Поиск"
			/>
		</label>
	)
}